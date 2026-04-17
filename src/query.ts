import prisma from "./index.js"

async function insertUser(username:string, email:string, password:string, firstName:string, lastName:string)
{
    await prisma.user.create({
        data : {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
}

insertUser('user1', 'user1', 'user1', 'user1', 'user1')
  .then(async () => {
    console.log("Data inserted succesfully in User Table")
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });