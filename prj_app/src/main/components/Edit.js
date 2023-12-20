import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Edit = () => {
	const [fs, setFontSize] = useState('40')
	const [ls, setLetterSpacing] = useState('0')
	const [lh, setLineHeight] = useState('40')
	const form = useRef();
	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm("service_y5yyu5u", "template_u7simre", form.current, "OiQv6dnH23P-Rboey").then(
			result => {
				alert("성공적으로 이메일이 전송되었습니다.");
				form.current.reset();
			},
			error => {
				console.log(error.text);
				alert("이메일이 전송이 실패되었습니다.");
			},
		);
	};
	return (
		<section className="edit" id="edit">
			<div className="inner">
				<div className='tit_wrap'>
					<h2>Contact</h2>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<div className='form_wrap'>
						<div className='inpt_layout'>
							<h3>제목</h3>
							<input name="ask_tit" placeholder='문의 제목' className='inpt'/>
						</div>
						<div className='inpt_layout'>
							<h3>이메일</h3>
							<input name="user_email" placeholder='이메일' className='inpt'/>
						</div>
					</div>
					<h3>문의 내용</h3>
					<div className="opt_wrap">
						<div className="inpt_wrap">
							<p>
								<span>Size</span>
								<strong id="fz_txt">{fs}</strong>px
							</p>
							<input type="range" id="fs_value" min="10" max="140" value={fs} onChange={e => setFontSize(e.target.value)}/>
						</div>
						<div className="inpt_wrap">
							<p>
								<span>Letter Spacing</span>
								<strong id="letter_txt">{ls}</strong>px
							</p>
							<input type="range" id="letter_value" min="-8" max="8" value={ls} onChange={e => setLetterSpacing(e.target.value)}/>
						</div>
						<div className="inpt_wrap">
							<p>
								<span>line Height</span>
								<strong id="line_txt">{lh}</strong>px
							</p>
							<input type="range" id="line_value" min="11" max="189" value={lh} onChange={e => setLineHeight(e.target.value)}/>
						</div>
					</div>
					<div className="inpt_warp">
						<div className="txt_area">
							<textarea rows="" cols="" name='message' style={{fontSize:fs+'px', letterSpacing:ls+'px', lineHeight:lh+'px'}} id="txt_edit" defaultValue={'내용을 입력해 주세요'}/>
						</div>
					</div>
					<input type="submit" value="메일 전송" className='btn_sand'/>
				</form>
			</div>
		</section>
	);
};

export default Edit;