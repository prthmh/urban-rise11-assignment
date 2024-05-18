import cred from "../assets/cred.png";

const CredComp = () => {
  return (
    <div className="border border-custom-grey-3 rounded-md flex justify-center items-center gap-4 py-3 mt-4">
      <img src={cred} alt="cred" className=" rounded-lg" />
      <div className=" flex flex-col">
        <p className=" text-black-1 font-semibold text-sm">
          CRED cashback up to 1500
        </p>
        <p className=" text-custom-grey-dark font-normal text-sm">
          Cashback up to ₹500 via CRED
        </p>
      </div>
    </div>
  );
};

export default CredComp;
