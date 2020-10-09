package contact

import (
	"crypto/tls"
	"fmt"
	"strings"
	"time"
	
	"gopkg.in/gomail.v2"
)

const (
	defaultRecipient = "hde@alexheld.io"
)

func createEmail(cr ContactRequest, recipient string, date time.Time) *gomail.Message {
	
	sb := strings.Builder{}
	sb.WriteString(fmt.Sprintf("<p>%s</p>\n", cr.Message))
	
	body := sb.String()
	
	subject := fmt.Sprintf("New Contact Request from %s", cr.Name)
	
	m := gomail.NewMessage(gomail.SetCharset("UTF-8"), gomail.SetEncoding(gomail.QuotedPrintable))
	
	m.SetDateHeader("Date", date)
	
	m.SetHeaders(map[string][]string{
		"From":     {m.FormatAddress(cr.Mail, cr.Name)},
		"Reply-To": {m.FormatAddress(cr.Mail, cr.Name)},
		"To":       {recipient},
		"Subject":  {subject},
	})
	m.SetBody("text/html", body)
	gomail.SetPartEncoding(gomail.QuotedPrintable)
	
	return m
}

func sendEmail(m *gomail.Message) error {
	d := gomail.NewDialer("smtp.gmail.com", 587, "08h3ld07@gmail.com", "zdv7z287uUGrt9yp76eGRdQg")
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}
	return d.DialAndSend(m)
}
