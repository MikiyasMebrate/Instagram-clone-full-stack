import { BsThreeDots } from "react-icons/bs";
import mike from "../../assets/image/user/mikepost.jpg";
import dailyInjera from "../../assets/image/logo/dailyinjera.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { FiBookmark, FiMessageCircle } from "react-icons/fi";
import { FaShareSquare } from "react-icons/fa";
import { useState } from "react";

const PostCard = () => {
    const [showText, setText] = useState<boolean>(false)
  return (
    <div className="text-white">
      {/** Header */}
      <section className="h-10  p-6 text-2xl  items-center flex justify-between">
        <div className="flex flex-row items-center gap-6">
          <img className="w-10" src={dailyInjera} alt="" />
          <p className="text-sm font-bold"> dailyinjera </p>
        </div>

        <div>
          <BsThreeDots />
        </div>
      </section>

      {/** Body */}
      <section>
        <img src={mike} alt="mike" />
      </section>

      <section className="flex justify-between text-2xl m-3">
        <div className="flex gap-3">
          <div>
            <button>
              <FaRegHeart />
            </button>
          </div>
          <div>
            <button>
              <FiMessageCircle />
            </button>
          </div>
          <div>
            <button>
              <FaShareSquare className="rounded-md text-2xl  font-extralight" />
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <button>
              <FiBookmark />
            </button>
          </div>
        </div>
      </section>

      <section className="ms-3 me-3 text-sm">
        <p className="font-bold">23 likes</p>
        <p className={`${showText ? '' : 'h-16 text-ellipsis overflow-hidden'}`}>
          <span className="font-bold">dailyinjera </span>
          የያዕቆብ መንገድ ከመጀመሪያው ማሰናከያ የነበረበት እንደ ነበር እግዚአብሔር ይናገራል—"በማሕፀን ሳለ የወንድሙን
          ተረከዝ ያዘ፤ ሙሉ ሰውም ሲሆን ከአምላክ ጋራ ታገለ" (12፥3)። ይህ እልኸኝነትም እንደማይጠቅመው ተነገረው፤
          "ስለዚህ ወደ አምላክህ ተመለስ፤ ፍቅርንና ፍትሕን ጠብቅ፤ ዘወትርም በአምላክህ ታመን" (ቍ. 6)።
          እግዚአብሔርን 'መታገል' ይቻል ይሆናል፣ ድል ነሺ ሆኖ መውጣት ግን አይቻልም። ብቸኛውና የተሻለው አማራጭም
          መመለስ፣ ወደ ፍቅሩ ግንኙነት መግባት፣ ፍትሕ ማድረግና እርሱን ሁልጊዜ መታመን ነው። እርሱ እውነተኛና ፍትሕን
          የሚሻ ስለሆነ፣ ፍትሕን እየጠበቁ መታመን ወደ እርሱ መመለስን ያጸናል፤ ኅብረቱን ያጠነክራል፤ መልካምን ዘመንና
          ልምላሜንም ያጎናጽፋል። 
          
          <br />
          <br />
          Hosea 12:6 ❝But you must return to your God; maintain
          love and justice, and wait for your God always.❞
          
          <br />
          <br />
          Telegram| https://t.me/+RGiVDVEzA5lJ9JtW 
          <br />
          Facebook| https://facebook.com/dailyInjera/ 
          <br />
          Instagram| https://www.instagram.com/dailyinjera/ 
          <br />
          Twitter| https://twitter.com/dailyinjera 
          <br />
          LinkedIn| https://www.linkedin.com/company/dailyinjera/ 
          <br />
          Pinterest| https://pinterest.com/dailyinjera Biblica 
          <br />
          Ethiopia| https://t.me/ethbiblica
        </p>
        <span className="text-slate-400" onClick={()=>setText(!showText)}>{showText ? '...Hide' : '...more'}</span>
      </section>

      {/** Comment */}
      <section className="ms-3 me-3 text-slate-400">
        <p>view all 2 comments</p>
      </section>
    </div>
  );
};

export default PostCard;
