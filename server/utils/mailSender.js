const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      //host: "gsmtp.gmail.com",
      service:"gmail",
      //port:465,
      auth: {
        user: "kaustubhreet_co20b4_49@dtu.ac.in",
        pass: "dshxmltfnnknduex",
      },
      //secure: true,
    })
    //console.log(process.env.MAIL_HOST);
    let info = await transporter.sendMail({
      from: `"EductionSite " <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log(info.response)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
