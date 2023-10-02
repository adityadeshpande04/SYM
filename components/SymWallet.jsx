import Button from "./Button";

export default function SymWallet(){
    return(
        <div className="relative md:top-32">
            <div className="relative flex flex-col left-10 gap-3">
            <h1 className="md:text-8xl text-3xl font-extrabold">SYM WALLET</h1>
            <p className="md:text-lg text-teal-800">Your Path to Exclusive Rewards and Savings</p>
            <p className="md:text-lg text-teal-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            <Button title="Register" />
            </div>
        </div>
    )
}