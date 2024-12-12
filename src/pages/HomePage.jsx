import React from 'react';

    const HomePage = () => (
      <>
        <div className="background-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="grid-pattern"></div>
        <main className="homepage">
          <section className="hero fade-up">
            <h1>ありんこのAIコンサルサイト</h1>
            <p className="hero-subtext">
              有料会員限定で、最新AIツールやプロンプト改善テクニックなど、<br/>
              あなたのクリエイティブワークフローを最大限強化するコンテンツをお届けします。
            </p>
            <a href="#about" className="cta-button">詳細を見る</a>
          </section>
          
          <section id="about" className="features">
            <div className="card fade-up" style={{ animationDelay: '0.2s' }}>
              <h2>豊富なAIコンテンツ</h2>
              <hr />
              <p>
                大規模言語モデル、画像生成AI、音声合成AIなど、<br/>
                幅広いAIツールの概要や使い方をカバーします。
              </p>
            </div>
            <div className="card fade-up" style={{ animationDelay: '0.4s' }}>
              <h2>プロンプト改善術</h2>
              <hr />
              <p>
                提示したいアウトプットに近づけるための<br/>
                効果的なプロンプト作成のコツを分かりやすく紹介。
              </p>
            </div>
            <div className="card fade-up" style={{ animationDelay: '0.6s' }}>
              <h2>コンサル・サポート</h2>
              <hr />
              <p>
                質問対応やカスタム相談など、<br/>
                会員ならではのサポートが受けられます。
              </p>
            </div>
          </section>

          <section className="features fade-up" style={{animationDelay: '0.8s'}}>
            <div className="card">
              <h2>今後の展開</h2>
              <hr/>
              <p>
                新たなAIツールの追加やワークショップ、<br/>
                スペシャルコンテンツなど、継続的にアップデート予定です。
              </p>
              <p>
                これから有料会員として登録すると、<br/>
                すべての最新情報と独占コンテンツへアクセス可能になります。
              </p>
            </div>
          </section>
        </main>
      </>
    );

    export default HomePage;
