package contact

type ContactRequest struct {
	Name    string `json:"name"`
	Mail    string `json:"mail"`
	Message string `json:"message"`
}


type contactForm struct {
	Name    string `form:"name" binding:"required" json:"name"`
	Mail    string `form:"mail" binding:"required" json:"mail"`
	Message string `form:"message" binding:"required" json:"message"`
}
