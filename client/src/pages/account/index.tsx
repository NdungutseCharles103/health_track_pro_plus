import MainLayout from '@/layouts/MainLayout';

const ProfilePage = () => {
   const profile = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      nationalId: '123456789',
      gender: 'Gender',
   };

   return (
      <MainLayout>
         <div className="w-full min-h-screen pt-32 flex flex-col items-center">
            <div className=" border-mainblue border-2 rounded-full mt-11">
               <img
                  className=" rounded-full w-40"
                  src={`https://ui-avatars.com/api/?name=${profile?.firstName}+${profile?.lastName}&bold=true`}
                  alt=""
               />
            </div>
            <div className="flex flex-col w-full items-center mt-5 mx-auto max-w-[800px]">
               <div className="grid w-full gap-6 sm:grid-cols-2">
                  <input
                     className="w-full border-2 border-mainblue rounded-md p-2"
                     value={profile?.firstName}
                     name="firstName"
                     disabled
                     type={'text'}
                  />
                  <input
                     className="w-full border-2 border-mainblue rounded-md p-2"
                     value={profile?.lastName}
                     name="lastName"
                     disabled
                     type={'text'}
                  />
                  <input
                     className="w-full border-2 border-mainblue rounded-md p-2"
                     value={profile?.email}
                     name="email"
                     disabled
                     type={'email'}
                  />
                  <input
                     className="w-full border-2 border-mainblue rounded-md p-2"
                     // national Id
                     value={profile?.nationalId}
                     name="nationalId"
                     disabled
                     type={'text'}
                  />
                  <input
                     className="w-full border-2 border-mainblue rounded-md p-2"
                     value={profile?.gender}
                     name="gender"
                     disabled
                     type={'text'}
                  />
               </div>
            </div>
         </div>
      </MainLayout>
   );
};

export default ProfilePage;
