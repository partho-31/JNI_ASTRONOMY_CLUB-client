import RegistrationForm from "@/components/modules/auth/register/RegistrationForm";


const RegistrationPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url(https://res.cloudinary.com/jniac-just/image/upload/v1763146148/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_covdnd.jpg)`,
        }}
      ></div>

      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
