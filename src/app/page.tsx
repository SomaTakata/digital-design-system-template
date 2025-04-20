import {
  Accordion,
  AccordionContent,
  AccordionSummary,
  Button,
  EmergencyBanner,
  EmergencyBannerBody,
  EmergencyBannerHeading,
  ErrorText,
  Input,
  Label,
  LanguageSelector,
  LanguageSelectorButton,
  LanguageSelectorGlobeIcon,
  LanguageSelectorMenu,
  LanguageSelectorMenuItem,
  Link,
  NotificationBanner,
  NotificationBannerBody,
  NotificationBannerHeading,
  Ol,
  Radio,
  RequirementBadge,
  Select,
  SupportText,
  Textarea,
  Ul,
} from "@/components";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダーセクション */}
      <header className="bg-blue-700 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">デジタル庁デザインシステム</h1>
          <div className="flex items-center gap-4">
            <LanguageSelector>
              <LanguageSelectorButton>
                <LanguageSelectorGlobeIcon />
                <span className="ml-2">言語を選択</span>
              </LanguageSelectorButton>
              <LanguageSelectorMenu>
                <LanguageSelectorMenuItem isCurrent>
                  日本語
                </LanguageSelectorMenuItem>
                <LanguageSelectorMenuItem>English</LanguageSelectorMenuItem>
              </LanguageSelectorMenu>
            </LanguageSelector>
          </div>
        </div>
      </header>

      {/* 緊急バナー */}
      <EmergencyBanner>
        <EmergencyBannerHeading level="h2">
          重要なお知らせ
        </EmergencyBannerHeading>
        <EmergencyBannerBody>
          これはデモンストレーション用のバナーです。緊急情報をここに表示します。
        </EmergencyBannerBody>
      </EmergencyBanner>

      {/* お知らせバナー */}
      <NotificationBanner bannerStyle="standard" type="info1">
        <NotificationBannerHeading level="h2">
          お知らせ
        </NotificationBannerHeading>
        <NotificationBannerBody>
          このページはデジタル庁デザインシステムのコンポーネントを使用したデモです。
        </NotificationBannerBody>
      </NotificationBanner>

      {/* メインセクション */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            デジタル庁デザインシステムとは
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                デジタル庁デザインシステムは、日本のデジタル行政サービスの一貫性と質を向上させるために開発されました。
                利用者中心のデザインと最高のアクセシビリティを実現するためのコンポーネント群を提供します。
              </p>
              <Button size="md" variant="solid-fill" className="mt-4">
                詳細を見る
              </Button>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">特徴</h3>
              <Ul>
                <li>アクセシビリティ対応</li>
                <li>レスポンシブデザイン</li>
                <li>一貫したデザイン</li>
                <li>効率的な開発</li>
              </Ul>
            </div>
          </div>
        </div>
      </section>

      {/* コンポーネント紹介セクション */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">主要コンポーネント</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">フォーム要素</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">
                    お名前 <RequirementBadge>必須</RequirementBadge>
                  </Label>
                  <Input id="name" placeholder="山田 太郎" />
                  <SupportText>
                    姓と名の間にスペースを入れてください
                  </SupportText>
                </div>

                <div>
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">テキスト入力</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="comment">ご意見・ご要望</Label>
                  <Textarea
                    id="comment"
                    rows={4}
                    placeholder="ここに入力してください"
                  />
                </div>
                <Button size="md" variant="solid-fill">
                  送信
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">セレクション</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="prefecture">都道府県</Label>
                  <Select id="prefecture">
                    <option value="">選択してください</option>
                    <option value="tokyo">東京都</option>
                    <option value="osaka">大阪府</option>
                    <option value="hokkaido">北海道</option>
                  </Select>
                </div>

                <div>
                  <fieldset className="space-y-2">
                    <legend>お問い合わせ種別</legend>
                    <div>
                      <Radio id="inquiry1" name="inquiry" value="general" />
                      <Label htmlFor="inquiry1">一般的なお問い合わせ</Label>
                    </div>
                    <div>
                      <Radio id="inquiry2" name="inquiry" value="technical" />
                      <Label htmlFor="inquiry2">技術的なお問い合わせ</Label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">よくある質問</h2>

          <div className="space-y-4">
            <Accordion>
              <AccordionSummary>
                デザインシステムとは何ですか？
              </AccordionSummary>
              <AccordionContent>
                <p>
                  デザインシステムとは、デジタルプロダクトの設計と開発を一貫性を持って効率的に行うための、
                  再利用可能なコンポーネント、ガイドライン、ドキュメントの集合体です。ユーザー体験の向上と開発の効率化を目的としています。
                </p>
              </AccordionContent>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                どのようにデザインシステムを導入できますか？
              </AccordionSummary>
              <AccordionContent>
                <p>
                  デザインシステムの導入は、まずプロジェクトに必要なパッケージをインストールすることから始まります。
                  詳しい導入方法はドキュメンテーションをご参照ください。
                </p>
                <Ol>
                  <li>パッケージのインストール</li>
                  <li>設定ファイルの作成</li>
                  <li>コンポーネントの利用開始</li>
                </Ol>
              </AccordionContent>
            </Accordion>

            <Accordion>
              <AccordionSummary>
                アクセシビリティ対応はどうなっていますか？
              </AccordionSummary>
              <AccordionContent>
                <p>
                  デジタル庁デザインシステムはWCAG
                  2.1のAAレベルに準拠するよう設計されています。
                  スクリーンリーダー対応、キーボード操作、色のコントラスト比などが考慮されています。
                </p>
              </AccordionContent>
            </Accordion>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">お問い合わせ</h2>

          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
            <form className="space-y-6">
              <div>
                <Label htmlFor="contact-name">
                  お名前 <RequirementBadge>必須</RequirementBadge>
                </Label>
                <Input id="contact-name" placeholder="お名前を入力" />
              </div>

              <div>
                <Label htmlFor="contact-email">
                  メールアドレス <RequirementBadge>必須</RequirementBadge>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="example@example.com"
                />
                <ErrorText>正しいメールアドレスを入力してください</ErrorText>
              </div>

              <div>
                <Label htmlFor="contact-message">
                  メッセージ <RequirementBadge>必須</RequirementBadge>
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder="お問い合わせ内容を入力してください"
                />
              </div>

              <div>
                <Button type="submit" size="md" variant="solid-fill">
                  送信する
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                デジタル庁デザインシステム
              </h3>
              <p>日本のデジタル行政サービス向けの統一されたデザインシステム</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">ホーム</Link>
                </li>
                <li>
                  <Link href="/components">コンポーネント</Link>
                </li>
                <li>
                  <Link href="/guidelines">ガイドライン</Link>
                </li>
                <li>
                  <Link href="/contact">お問い合わせ</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <address className="not-italic">
                〒100-8914
                <br />
                東京都千代田区永田町1-6-1
                <br />
                デジタル庁
                <br />
                <Link href="mailto:info@example.gov.jp">
                  info@example.gov.jp
                </Link>
              </address>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p>© 2023 デジタル庁. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
