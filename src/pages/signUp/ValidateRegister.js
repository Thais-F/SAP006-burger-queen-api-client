export function validateValues(values) {

  let errors = { valid: true };

  if (!values.name.trim()) {
    errors.name = "Insira seu nome";
    errors.valid = false;
  }

  if (!values.email) {
    errors.email = "Insira seu email";
    errors.valid = false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Formato de email inválido";
    errors.valid = false;
  }

  if (!values.password) {
    errors.password = "Insira uma senha";
    errors.valid = false;
  } else if (values.password.length < 6) {
    errors.password = "A senha deve conter no mínimo 6 caracteres";
    errors.valid = false;
  }

  if (values.role !== "atendente" && values.role !== "cozinheiro") {
    errors.role = "Preencha seu cargo";
    errors.valid = false;
  }

  return errors;
}
