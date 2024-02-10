import { TbError404, TbExclamationMark } from "react-icons/tb";
import { MdOutlineFindInPage } from "react-icons/md";
import { BsEmojiGrimace, BsEmojiNeutral } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

function NoPage() {
    return (
        <div className="">
            <h2>
                <TbError404 className="fs-1 fw-bold" /> <BsEmojiGrimace /> <FaRegCommentDots />
                <br />
                Oops<TbExclamationMark />
            </h2>
            <h3>
                Page not found <MdOutlineFindInPage />
            </h3>
        </div>
    )
}

export default NoPage;