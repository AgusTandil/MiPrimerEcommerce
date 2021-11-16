const nodemailer = require(`nodemailer`);

const mails_controller = {
  sendEmail: (req, res) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "projectomanfia@gmail.com ",
        pass: "@Manfia123",
      },
    });
    const { email } = req.body;

    const mailOptions = {
      from: "Remitente <projectomanfia@gmail.com>",
      to: `${email}`,
      subject: `Manfia - Factura de Compra`,
      html: `<h2>Gracias por elegirnos!</h2>
        <p style="font-size: 1.5em; background-color: #317399; padding: 0 5px; color: #fff;">Su compra a sido realizada con exito!</p>
        <p style="font-size: 1.5em;">Para ver el detalle de su compra por favor ingrese aqui: <a href="https://google.com"><strong>Mi compra!</strong></a></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send(error.message);
      } else {
        console.log("Email Enviado");
        res.status(200).json(info);
      }
    });
  },
};

module.exports = mails_controller;
