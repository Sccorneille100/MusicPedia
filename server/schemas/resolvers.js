const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
              return userData;
            }
            throw new Error('Not authenticated');
          },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("Can't find this user");
          }
    
          const correctPw = await user.isCorrectPassword(password);
          if (!correctPw) {
            throw new Error('Wrong password!');
          }
    
          const token = signToken(user);
          return { token, user };
        },
        addUser: async (parent, args) => {
          const user = await User.create(args);
          if (!user) {
            return;
          }
          const token = signToken(user);
          return ({ token, user });
        },
    },
};

module.exports = resolvers;