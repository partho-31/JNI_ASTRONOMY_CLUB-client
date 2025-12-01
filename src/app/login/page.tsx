import LoginForm from "@/components/modules/auth/login/LoginForm";
import img from "../../assets/auth/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy.jpg"


const page = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url(${img.src})`
        }}
      ></div>
      <LoginForm />
    </div>
  );
};

export default page;
