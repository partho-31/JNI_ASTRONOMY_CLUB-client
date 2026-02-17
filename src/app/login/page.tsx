import LoginForm from "@/components/modules/auth/login/LoginForm";


const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url(https://res.cloudinary.com/jniac-just/image/upload/v1763146148/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_covdnd.jpg)`
        }}
      ></div>
      <LoginForm />
    </div>
  );
};

export default page;
