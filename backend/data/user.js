import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10);

const users = [
   {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', salt),
      isAdmin: true
   },
   {
      name: 'John Doe',
      email: 'john@example.com',
      password: bcrypt.hashSync('123456', salt),
   },
   {
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: bcrypt.hashSync('123456', salt),
   }
]

export default users