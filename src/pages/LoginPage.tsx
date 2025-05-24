import MainLogo from '../components/MainLogo';
const LoginPage = () => {
    return (
        <>
            <div className='min-h-screen bg-[#0b1120] flex flex-col'>
                <div className="flex justify-start pt-8 pl-5">
                    <MainLogo height={37} width={0} />
                </div>
                <div className="flex flex-col items-center -mt-7">
                    <span className="text-2xl font-semibold">เข้าสู่ระบบหรือลงทะเบียนเพื่อดำเนินการต่อ</span>
                    <span className="text-base font-medium text-gray-500">สแกนรหัส QR หรือ กรอกเบอร์มือถือเพื่อเข้าสู่ระบบ หรือ สร้างบัญชี</span>
                </div>

                <div className='flex flex-1 justify-center items-center'>
                    <div className='flex flex-col items-center '>
                        <img src="/src/assets/QR_code_for_mobile_English_Wikipedia.svg" className='bg-white	rounded-xl h-44' alt="" />
                        <span>สแกนรหัส QR ด้วยกล้องบนมือถือของคุณเพื่อเข้าสู่ระบบ</span>
                        <span>คลิกที่ลิงก์เพื่อไปยังแอปฯ Disney+ Hotstar</span>
                    </div>
                    <div className='flex flex-col items-center mx-8'>
                        <div>
                            <span>หรือ</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-9">
                        <div className='flex mb-4'>
                            <input
                                type="text"
                                value="+66"
                                readOnly
                                className="w-16 px-2 py-2 rounded-l bg-gray-800 text-white border border-gray-600"
                            />
                            <input
                                type="text"
                                placeholder="กรอกหมายเลขโทรศัพท์มือถือ"
                                className="w-56 px-2 py-2 rounded-r bg-gray-800 text-white border-t border-b border-r border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
