function status(request, response) {
  response.status(200).json({ teste: "resquest e response .dev" });
}

export default status;
