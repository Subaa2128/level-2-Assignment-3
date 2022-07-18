import User from "../schema/usersSchema.js";

export const signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      return res.json({ error: { message: "User is already registered" } });
    }
    const data = await User.create({
      name,
      email,
      password,
    });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const isExistingUser = await User.findOne({ email });

    if (!isExistingUser) {
      return res.json({ error: { message: "User is not registered" } });
    }

    if (isExistingUser.password !== password) {
      return res.json({ error: { message: "Invalid message" } });
    }
    res.json(isExistingUser);
  } catch (error) {
    console.log("error");
  }
};
