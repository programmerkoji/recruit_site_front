import "./JobOffer.css";

function createData(
	id: number,
	work_place: string,
	work_time: string,
	koyo_keitai: string,
	price: string
) {
	return { id, work_place, work_time, koyo_keitai, price };
}

const datas = [
  createData(
    0,
    '東京',
    '9:00 ~ 18:00',
    '正社員',
    '18万円',
  ),
  createData(
    1,
    '大阪',
    '9:00 ~ 18:00',
    '契約社員',
    '18万円',
  ),
  createData(
    2,
    '名古屋',
    '9:00 ~ 18:00',
    'バイト',
    '10万円',
  ),
  createData(
    3,
    '福岡',
    '9:00 ~ 18:00',
    '正社員',
    '18万円',
  ),
  createData(
    4,
    '札幌',
    '10:00 ~ 19:00',
    '正社員',
    '18万円',
  ),
]

export const JobOffer = () => {
	return (
		<>
			<div className="ly_cont">
				<div className="ly_cont_inner ly_cont__col ly_archive">
					<main className="ly_cont_main bl_archive">
						<div className="bl_archive_head">
							<p className="el_hitNum">
								<span>
									<span className="txt_lg txt_bold">件</span>&nbsp;がヒット！
								</span>
								<span>〜件を表示</span>
							</p>
							<p>求人は見つかりませんでした…</p>
							<a href="" className="back">
								求人を探す
							</a>
						</div>
						<ul className="bl_archive_list">
              {datas.map((data) => (
                <li className="bl_archive_item" key={data.id}>
                  <div className="bl_archive_inner">
                    <h3 className="bl_archive_ttl">
                      <span className="company_name"></span>
                      <span className="word"></span>
                    </h3>
                    <div className="bl_media">
                      <figure className="bl_media_imgWrapper">
                        <img
                          src="{{ asset('storage/' . $job_offer->image[0]->file_name) }}"
                          alt=""
                          className="w-52"
                        />
                      </figure>
                      <div className="bl_media_body">
                        <dl className="bl_archive_def">
                          <div>
                            <dt className="bl_archive_dttl">勤務地</dt>
                            <dd className="bl_archive_ddata">{ data.work_place }</dd>
                          </div>
                          <div>
                            <dt className="bl_archive_dttl">勤務時間</dt>
                            <dd className="bl_archive_ddata">{ data.work_time }</dd>
                          </div>
                          <div>
                            <dt className="bl_archive_dttl">雇用形態</dt>
                            <dd className="bl_archive_ddata">{ data.koyo_keitai }</dd>
                          </div>
                          <div>
                            <dt className="bl_archive_dttl">給与</dt>
                            <dd className="bl_archive_ddata">{ data.price }</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bl_archive_bottom">
                    <p className="bl_archive_endDate">
                      <span className="label">掲載終了</span>
                      <i className="fa-regular fa-clock"></i>
                    </p>
                    <ul className="bl_archive_btnList">
                      <li className="bl_archive_btnItem">
                        <form
                          action="{{ route('user.bookmark.store', $job_offer) }}"
                          method="post"
                        >
                          <button
                            type="submit"
                            className="bl_archive_btn favorite"
                          >
                            お気に入りに追加
                          </button>
                        </form>
                        <form
                          action="{{ route('user.bookmark.destroy', $job_offer) }}"
                          method="post"
                        >
                          <button
                            type="submit"
                            className="bl_archive_btn favorite remove"
                          >
                            お気に入りを解除
                          </button>
                        </form>
                      </li>
                      <li className="bl_archive_btnItem">
                        <a
                          href="{{ route('user.login') }}"
                          className="bl_archive_btn favorite"
                        >
                          お気に入りに追加
                        </a>
                      </li>
                      <li className="bl_archive_btnItem">
                        <a
                          href="{{ route('user.show', ['job_offer' => $job_offer->id]) }}"
                          className="bl_archive_btn more"
                        >
                          詳細を見る
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
						</ul>
					</main>
					<aside className="ly_aside">
						<div className="ly_aside_inner bl_aside">
							<form
								action="{{ route('user.index') }}"
								method="get"
								className="bl_search"
							>
								<ul className="bl_search_inner">
									<li className="bl_search_item">
										<p className="text accordion_toggle">エリアで検索</p>
										<ul className="el_searchTag">
											<li>
												<i className="fa-solid fa-tag"></i>
											</li>
										</ul>
										<ul className="bl_checkbox">
											<li className="bl_checkbox_item">
												<label>
													<input
														type="checkbox"
														name="area[]"
														value="{{ $job_area->job_area->id }}"
														className="bl_checkbox_input"
													/>
													<span></span>
												</label>
											</li>
										</ul>
									</li>
									<li className="bl_search_item job_categories">
										<p className="text accordion_toggle">職種で検索</p>
										<ul className="el_searchTag">
											<li>
												<i className="fa-solid fa-tag"></i>
											</li>
										</ul>
										<ul className="bl_checkbox">
											<li className="bl_checkbox_item">
												<label>
													<input
														type="checkbox"
														name="category[]"
														className="bl_checkbox_input"
														value="{{ $job_category->job_category->id }}"
													/>
													<span></span>
												</label>
											</li>
										</ul>
									</li>
									<li className="bl_search_item">
										<div className="bl_keywordSearch">
											<i className="fa-solid fa-magnifying-glass"></i>
											<input
												type="search"
												name="keyword"
												value="{{ Request::get('keyword') }}"
												placeholder="キーワードで検索"
											/>
										</div>
									</li>
								</ul>
								<button type="submit" className="bl_search_btn">
									検索する
								</button>
							</form>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
};
