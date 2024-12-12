import React from 'react';

    const MyPage = () => (
      <>
        <div className="background-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="grid-pattern"></div>
        <main className="homepage" style={{paddingTop: '5rem'}}>
          <section className="fade-up">
            <h1>マイページ</h1>
            <p className="hero-subtext">
              ようこそ、ありんこのAIコンサル会員ページへ。<br/>
              ここから有料会員限定コンテンツへアクセスできます。
            </p>
          </section>

          <section className="features fade-up" style={{animationDelay: '0.2s'}}>
            <div className="card">
              <h2>あなたの会員ステータス</h2>
              <hr />
              <p>
                プラン：<strong>プレミアムプラン</strong><br/>
                有効期限：2024年12月31日
              </p>
            </div>

            <div className="card">
              <h2>おすすめコンテンツ</h2>
              <hr />
              <ul className="content-list">
                <li><a href="/ai-list">AIツール一覧・比較ページ</a></li>
                <li><a href="/prompts">プロンプト例集</a></li>
                <li><a href="/guides">各種ガイド・チュートリアル</a></li>
              </ul>
            </div>

            <div className="card">
              <h2>コンサル相談窓口</h2>
              <hr />
              <p>
                質問やリクエストがあれば、以下のフォームからどうぞ。<br/>
                <a className="cta-button" href="/contact">問い合わせフォーム</a>
              </p>
            </div>
          </section>
        </main>
      </>
    );

    export default MyPage;
