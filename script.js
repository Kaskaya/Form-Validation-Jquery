$("#form").validate({
  rules: {
    name: {
      minlength: 2,
    },
    email: {
      email: true,
    },
    phone: {
      number: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  messages: {
    name: {
      required: "Enter your name",
      minlength: "Name at least 2 characters",
    },
    email: "Enter your email",
    phone: "Enter your phone",
    subject: "Enter your subject",
    formMessage: "Enter your message",
  },

  submitHandler: function (form) {
    form.submit();
  },
});
