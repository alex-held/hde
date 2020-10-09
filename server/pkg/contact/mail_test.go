package contact

import (
	"fmt"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
)

var (
	UnixEpoch = time.Date(1970, time.January, 1, 0, 0, 0, 0, time.UTC)
)

func TestCreateMailMessage(t *testing.T) {
	
	type expected struct {
		Mime                    string
		Date                    string
		ContentType             string
		ContentTransferEncoding string
		From                    string
		To                      string
		Subject                 string
		Message                 string
		ReplyTo                 string
	}
	
	testCases := []struct {
		Request         ContactRequest
		Date            time.Time
		Recipient       string
		Expected        expected
		ExpectedHeaders map[string]string
	}{
		{
			Request: ContactRequest{
				Name:    "max mustermann",
				Mail:    "max.mustermann@example.com",
				Message: "hello i am the message",
			},
			Date:      UnixEpoch,
			Recipient: "contact@example.com",
			Expected: expected{
				Mime:                    "Mime-Version: 1.0",
				Date:                    "Date: Thu, 01 Jan 1970 00:00:00 +0000",
				ContentType:             "Content-Type: text/html; charset=UTF-8",
				ContentTransferEncoding: "Content-Transfer-Encoding: quoted-printable",
				From:                    "From: \"max mustermann\" <max.mustermann@example.com>",
				ReplyTo:                 "Reply-To: \"max mustermann\" <max.mustermann@example.com>",
				To:                      "To: contact@example.com",
				Subject:                 "Subject: New Contact Request from max mustermann",
				Message:                 "<p>hello i am the message</p>",
			},
			ExpectedHeaders: map[string]string{
				"From":    "\"max mustermann\" <max.mustermann@example.com>",
				"To":      "contact@example.com",
				"Subject": "New Contact Request from max mustermann",
				"Message": "<p>hello i am the message</p>",
			},
		},
	}
	
	for _, test := range testCases {
		output := *createEmail(test.Request, test.Recipient, test.Date)
		sb := strings.Builder{}
		_, _ = output.WriteTo(&sb)
		actual := strings.ReplaceAll(sb.String(), "\r\n", "\n")
		
		t.Run("sets 'Reply-To' header", func(t *testing.T) {
			assert.Equal(t, test.ExpectedHeaders["From"], output.GetHeader("Reply-To")[0])
		})
		t.Run("sets 'To' header", func(t *testing.T) {
			assert.Equal(t, test.ExpectedHeaders["To"], output.GetHeader("To")[0])
		})
		t.Run("sets 'From' header", func(t *testing.T) {
			assert.Equal(t, test.ExpectedHeaders["From"], output.GetHeader("From")[0])
		})
		t.Run("sets 'Subject' header", func(t *testing.T) {
			assert.Equal(t, test.ExpectedHeaders["Subject"], output.GetHeader("Subject")[0])
		})
		t.Run("contains all expected mail contents", func(t *testing.T) {

			fmt.Println(actual)
			assert.Contains(t, actual, test.Expected.Mime)
			assert.Contains(t, actual, test.Expected.Date)
			assert.Contains(t, actual, test.Expected.ContentTransferEncoding)
			assert.Contains(t, actual, test.Expected.ContentType)
			assert.Contains(t, actual, test.Expected.From)
			assert.Contains(t, actual, test.Expected.ReplyTo)
			assert.Contains(t, actual, test.Expected.To)
			assert.Contains(t, actual, test.Expected.Subject)
			assert.Contains(t, actual, test.Expected.Message)
		})
		
	}
}
