import "./Header.css";

export const Header = () => {
	return (
		<header className="ly_head">
			<div className="ly_cont_inner bl_head">
				<h1 className="bl_head_logo">
					<a href="{{ route('user.index') }}" className="hp_opacity1">
						<img
							src="./images/header_logo.svg"
							width="108"
							height="53"
							alt="WEB人 ウェブジン"
						/>
					</a>
				</h1>

				<ul className="bl_nav">
					<li className="bl_nav_item">
						<a
							href="{{ route('user.bookmarks') }}"
							className="bl_nav_link favorite"
						>
							<i className="fa-regular fa-star"></i>お気に入り
						</a>
					</li>
					<li className="bl_nav_item">
						<form action="{{ route('user.logout') }}" method="post">
							<button type="submit" className="bl_nav_link login">
								<i className="fa-solid fa-arrow-right-to-bracket"></i>ログアウト
							</button>
						</form>
					</li>
					<li className="bl_nav_item">
						<a href="{{ route('user.login') }}" className="bl_nav_link login">
							<i className="fa-solid fa-arrow-right-to-bracket"></i>ログイン
						</a>
					</li>
					<li className="bl_nav_item">
						<a
							href="{{ route('user.register') }}"
							className="bl_nav_link registration"
						>
							<i className="fa-solid fa-user-plus"></i>新規登録
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};
