export const register = async (data, UserModel) => {
  const { username, email, password, confirmPassword, fullName = null } = data;
  
  if (password !== confirmPassword) {
    throw new Error('As senhas não coincidem.');
  }
  
  if (password.length < 8) {
    throw new Error('A senha deve ter no mínimo 8 caracteres.');
  }
  
  // Verifica se username ou email já existem
  const existingUser = await UserModel.findOne({
    where: {
      [require('sequelize').Op.or]: [{ username }, { email }]
    }
  });
  
  if (existingUser) {
    throw new Error('Este e-mail ou usuário já está cadastrado.');
  }
  // TODO: hash da senha + salvar no banco
  return { message: 'Usuário criado com sucesso!' };
};