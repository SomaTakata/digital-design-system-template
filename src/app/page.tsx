"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionBackLink,
  AccordionContent,
  AccordionSummary,
  BreadcrumbItem,
  BreadcrumbList,
  Breadcrumbs,
  BreadcrumbsLabel,
  Button,
  Checkbox,
  Divider,
  EmergencyBanner,
  EmergencyBannerBody,
  EmergencyBannerButton,
  EmergencyBannerHeading,
  ErrorText,
  CloseWithLabelIcon,
  HamburgerMenuButton,
  HamburgerWithLabelIcon,
  Input,
  Label,
  LanguageSelector,
  LanguageSelectorArrowIcon,
  LanguageSelectorButton,
  LanguageSelectorGlobeWithLabelIcon,
  LanguageSelectorMenu,
  LanguageSelectorMenuItem,
  Legend,
  Link,
  NotificationBanner,
  NotificationBannerBody,
  NotificationBannerClose,
  NotificationBannerHeader,
  NotificationBannerHeading,
  Ol,
  RequirementBadge,
  Select,
  SupportText,
  Textarea,
  Ul,
  UtilityLink,
  UtilityLinkExternalLinkIcon,
} from "@/components";
import { BreadcrumbLink } from "@/components/Breadcrumbs";
import { Dialog, DialogBody } from "@/components/v1/Dialog";

export default function ComponentShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("日本語");
  const [activeTab, setActiveTab] = useState("components");

  const languages = [
    { value: "ja", label: "日本語" },
    { value: "en", label: "English" },
    { value: "zh", label: "中文" },
    { value: "ko", label: "한국어" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gov-blue-1 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-std-24B-150 font-bold">
            デジタル庁デザインシステム コンポーネント一覧
          </h1>

          <div className="flex items-center space-x-4">
            <LanguageSelector>
              <LanguageSelectorButton
                onClick={() =>
                  setIsLanguageSelectorOpen(!isLanguageSelectorOpen)
                }
                aria-expanded={isLanguageSelectorOpen}
              >
                <LanguageSelectorGlobeWithLabelIcon>
                  {selectedLanguage}
                </LanguageSelectorGlobeWithLabelIcon>
                <LanguageSelectorArrowIcon />
              </LanguageSelectorButton>

              {isLanguageSelectorOpen && (
                <LanguageSelectorMenu>
                  {languages.map((lang) => (
                    <LanguageSelectorMenuItem
                      key={lang.value}
                      onClick={() => {
                        setSelectedLanguage(lang.label);
                        setIsLanguageSelectorOpen(false);
                      }}
                    >
                      {lang.label}
                    </LanguageSelectorMenuItem>
                  ))}
                </LanguageSelectorMenu>
              )}
            </LanguageSelector>

            <HamburgerMenuButton
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <CloseWithLabelIcon>閉じる</CloseWithLabelIcon>
              ) : (
                <HamburgerWithLabelIcon>メニュー</HamburgerWithLabelIcon>
              )}
            </HamburgerMenuButton>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <EmergencyBanner>
        <EmergencyBannerHeading level="h2">
          〇〇地区に避難準備情報が発令されました
        </EmergencyBannerHeading>
        <EmergencyBannerBody>
          <p className="text-oln-16R-150 mb-2">2024年1月1日 06:00更新</p>
          <p className="text-oln-16R-150">
            1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
          </p>
          <EmergencyBannerButton href="/shelters">
            指定避難所を確認する
          </EmergencyBannerButton>
        </EmergencyBannerBody>
      </EmergencyBanner>

      {/* Main content */}
      <main className="container mx-auto py-8 px-4">
        <Breadcrumbs>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">ホーム</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbsLabel>コンポーネント一覧</BreadcrumbsLabel>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumbs>

        <div className="my-8">
          <h2 className="text-std-32B-150 mb-6">コンポーネントカタログ</h2>
          <NotificationBanner bannerStyle="standard" type="info1">
            <NotificationBannerHeader>
              <NotificationBannerHeading level="h2">
                お知らせ
              </NotificationBannerHeading>
              <NotificationBannerClose onClick={() => {}} />
            </NotificationBannerHeader>
            <NotificationBannerBody>
              <p className="text-std-16R-150">
                このページではデジタル庁デザインシステム（DADS
                v2）のコンポーネントを確認できます。
              </p>
              <div className="grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end">
                <Button type="button" size="md" variant="outline">
                  詳細を見る
                </Button>
                <Button type="button" size="md" variant="solid-fill">
                  ガイドラインを確認
                </Button>
              </div>
            </NotificationBannerBody>
          </NotificationBanner>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-8 border-b border-solid-gray-300">
          <button
            className={`px-4 py-3 text-std-16B-150 ${
              activeTab === "components"
                ? "border-b-2 border-gov-blue-1 text-gov-blue-1"
                : "text-solid-gray-700"
            }`}
            onClick={() => setActiveTab("components")}
          >
            コンポーネント
          </button>
          <button
            className={`px-4 py-3 text-std-16B-150 ${
              activeTab === "guidelines"
                ? "border-b-2 border-gov-blue-1 text-gov-blue-1"
                : "text-solid-gray-700"
            }`}
            onClick={() => setActiveTab("guidelines")}
          >
            デザインガイドライン
          </button>
        </div>

        {activeTab === "components" ? (
          /* Component sections */
          <div>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                ボタン
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    塗りボタン（Solid Fill）
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="solid-fill" size="lg">
                      ラベル
                    </Button>
                    <Button variant="solid-fill" size="md">
                      ラベル
                    </Button>
                    <Button variant="solid-fill" size="sm">
                      ラベル
                    </Button>
                    <Button variant="solid-fill" size="xs">
                      ラベル
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    アウトラインボタン（Outline）
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="lg">
                      ラベル
                    </Button>
                    <Button variant="outline" size="md">
                      ラベル
                    </Button>
                    <Button variant="outline" size="sm">
                      ラベル
                    </Button>
                    <Button variant="outline" size="xs">
                      ラベル
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    テキストボタン（Text）
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="text" size="lg">
                      ラベル
                    </Button>
                    <Button variant="text" size="md">
                      ラベル
                    </Button>
                    <Button variant="text" size="sm">
                      ラベル
                    </Button>
                    <Button variant="text" size="xs">
                      ラベル
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    Disabledの作例（aria-disabled 属性を使用）
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <Button aria-disabled={true} variant="solid-fill" size="md">
                      ラベル
                    </Button>
                    <Button aria-disabled={true} variant="outline" size="md">
                      ラベル
                    </Button>
                    <Button aria-disabled={true} variant="text" size="md">
                      ラベル
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    ボタンの見た目をしたリンク
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild variant="solid-fill" size="md">
                      <a
                        className="inline-flex items-center justify-center"
                        href="#"
                      >
                        ラベル
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="md">
                      <a
                        className="inline-flex items-center justify-center"
                        href="#"
                      >
                        ラベル
                      </a>
                    </Button>
                    <Button asChild variant="text" size="md">
                      <a
                        className="inline-flex items-center justify-center"
                        href="#"
                      >
                        ラベル
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                通知バナー
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    標準バナー（Standard）
                  </h4>
                  <NotificationBanner bannerStyle="standard" type="info1">
                    <NotificationBannerHeader>
                      <NotificationBannerHeading level="h2">
                        登録期間が延長されました
                      </NotificationBannerHeading>
                      <NotificationBannerClose onClick={() => {}} />
                    </NotificationBannerHeader>
                    <NotificationBannerBody>
                      <p className="text-std-16R-150">
                        ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
                      </p>
                    </NotificationBannerBody>
                  </NotificationBanner>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    カラーチップバナー（Color Chip）
                  </h4>
                  <NotificationBanner bannerStyle="color-chip" type="warning">
                    <NotificationBannerHeader>
                      <NotificationBannerHeading level="h2">
                        偽SNSアカウントにご注意ください
                      </NotificationBannerHeading>
                      <NotificationBannerClose onClick={() => {}} />
                    </NotificationBannerHeader>
                    <NotificationBannerBody>
                      <p className="text-std-16R-150">
                        ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
                      </p>
                    </NotificationBannerBody>
                  </NotificationBanner>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    アクションボタン付きバナー
                  </h4>
                  <NotificationBanner bannerStyle="standard" type="success">
                    <NotificationBannerHeader>
                      <NotificationBannerHeading level="h2">
                        登録手続きは全て完了しました
                      </NotificationBannerHeading>
                    </NotificationBannerHeader>
                    <NotificationBannerBody>
                      <p className="text-std-16R-150">
                        ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
                      </p>
                      <div className="grid mt-4 gap-2 desktop:grid-flow-col desktop:gap-4 desktop:justify-end">
                        <Button
                          className="text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300"
                          size="md"
                          type="button"
                          variant="outline"
                        >
                          戻る
                        </Button>
                        <Button
                          className="bg-success-2 hover:bg-green-1000 active:bg-green-1200"
                          size="md"
                          type="button"
                          variant="solid-fill"
                        >
                          マイページへ
                        </Button>
                      </div>
                    </NotificationBannerBody>
                  </NotificationBanner>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">エラーバナー</h4>
                  <NotificationBanner bannerStyle="standard" type="error">
                    <NotificationBannerHeader>
                      <NotificationBannerHeading level="h2">
                        操作を完了できませんでした
                      </NotificationBannerHeading>
                      <NotificationBannerClose onClick={() => {}} />
                    </NotificationBannerHeader>
                    <NotificationBannerBody>
                      <p className="text-std-16R-150">
                        ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
                      </p>
                    </NotificationBannerBody>
                  </NotificationBanner>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                緊急バナー
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">標準の緊急バナー</h4>
                  <EmergencyBanner>
                    <EmergencyBannerHeading level="h2">
                      〇〇地区に避難準備情報が発令されました
                    </EmergencyBannerHeading>
                    <EmergencyBannerBody>
                      <p className="text-oln-16R-150 mb-2">
                        2024年1月1日 06:00更新
                      </p>
                      <p className="text-oln-16R-150">
                        1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
                      </p>
                    </EmergencyBannerBody>
                  </EmergencyBanner>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    ボタン付き緊急バナー
                  </h4>
                  <EmergencyBanner>
                    <EmergencyBannerHeading level="h2">
                      〇〇地区に避難準備情報が発令されました
                    </EmergencyBannerHeading>
                    <EmergencyBannerBody>
                      <p className="text-oln-16R-150 mb-2">
                        2024年1月1日 06:00更新
                      </p>
                      <p className="text-oln-16R-150">
                        1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
                      </p>
                      <EmergencyBannerButton href="#">
                        指定避難所を確認する
                      </EmergencyBannerButton>
                    </EmergencyBannerBody>
                  </EmergencyBanner>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    新規ウィンドウで開くボタン付き緊急バナー
                  </h4>
                  <EmergencyBanner>
                    <EmergencyBannerHeading level="h2">
                      〇〇地区に避難準備情報が発令されました
                    </EmergencyBannerHeading>
                    <EmergencyBannerBody>
                      <p className="text-oln-16R-150 mb-2">
                        2024年1月1日 06:00更新
                      </p>
                      <p className="text-oln-16R-150">
                        1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
                      </p>
                      <EmergencyBannerButton href="#" target="_blank">
                        指定避難所を確認する
                      </EmergencyBannerButton>
                    </EmergencyBannerBody>
                  </EmergencyBanner>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                アコーディオン
              </h3>
              <div className="flex flex-col">
                <Accordion className="text-std-16N-170">
                  <AccordionSummary
                    className="desktop:text-std-18N-160"
                    id="accordion-example-summary-1"
                  >
                    <h3>ダミーテキストとは何ですか？</h3>
                  </AccordionSummary>
                  <AccordionContent>
                    <p className="mb-4">これはダミーテキストです。</p>
                    <p>
                      ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
                    </p>
                    <AccordionBackLink
                      className="mt-4 [text-spacing-trim:trim-start]"
                      href="#accordion-example-summary-1"
                    >
                      「ダミーテキストとは何ですか？」の先頭に戻る
                    </AccordionBackLink>
                  </AccordionContent>
                </Accordion>

                <Accordion className="text-std-16N-170">
                  <AccordionSummary
                    className="desktop:text-std-18N-160"
                    id="accordion-example-summary-2"
                  >
                    <h3>
                      ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？
                    </h3>
                  </AccordionSummary>
                  <AccordionContent>
                    これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。これはダミーテキストです。ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
                    <AccordionBackLink
                      className="mt-4 [text-spacing-trim:trim-start]"
                      href="#accordion-example-summary-2"
                    >
                      「ダミーテキストがデザインやレイアウトに使用されていることがよくありますが、どのような目的や意味で使用されているのでしょうか？」の先頭に戻る
                    </AccordionBackLink>
                  </AccordionContent>
                </Accordion>

                <Accordion className="text-std-16N-170">
                  <AccordionSummary
                    className="desktop:text-std-18N-160"
                    id="accordion-example-summary-3"
                  >
                    <h3>ダミーテキストはどのような場合に使用されますか？</h3>
                  </AccordionSummary>
                  <AccordionContent>
                    <p className="mb-4">これはダミーテキストです。</p>
                    <p className="mb-4">
                      ダミーテキストは、デザインやレイアウトの作成時に使用される仮の文章です。
                    </p>
                    <p>
                      ダミーテキストを使用すると、デザインの全体像を評価したり、テキストの配置や長さを確認したりすることができます。ダミーテキストは実際の文章ではないので、内容には意味がありません。
                    </p>
                    <AccordionBackLink
                      className="mt-4 [text-spacing-trim:trim-start]"
                      href="#accordion-example-summary-3"
                    >
                      「ダミーテキストはどのような場合に使用されますか？」の先頭に戻る
                    </AccordionBackLink>
                  </AccordionContent>
                </Accordion>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                パンくずリスト（Breadcrumbs）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本のパンくずリスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <Breadcrumbs aria-labelledby="basic-breadcrumbs-label">
                      <BreadcrumbsLabel
                        className="sr-only"
                        id="basic-breadcrumbs-label"
                      >
                        現在位置
                      </BreadcrumbsLabel>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">組織情報</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">
                            長いページタイトルが入ります長いページタイトルが入ります
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumbs>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    ホームアイコン付きパンくずリスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <Breadcrumbs aria-labelledby="icon-breadcrumbs-label">
                      <BreadcrumbsLabel
                        className="sr-only"
                        id="icon-breadcrumbs-label"
                      >
                        現在位置
                      </BreadcrumbsLabel>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            className="inline-flex items-center gap-1"
                            href="#"
                          >
                            <svg
                              aria-hidden={true}
                              fill="none"
                              height="16"
                              viewBox="0 0 16 16"
                              width="16"
                            >
                              <g>
                                <path
                                  d="M3 13.6666V6.16667L7.99998 2.40387L13 6.16667V13.6666H9.26922V9.2051H6.73075V13.6666H3Z"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            ホーム
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">組織情報</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">
                            長いページタイトルが入ります長いページタイトルが入ります
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumbs>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    ラベル表示付きパンくずリスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <Breadcrumbs
                      className="flex gap-1 items-baseline"
                      aria-labelledby="visible-label-breadcrumbs"
                    >
                      <div className="flex-none">
                        <BreadcrumbsLabel
                          className="text-std-16R-150"
                          id="visible-label-breadcrumbs"
                        >
                          現在位置
                        </BreadcrumbsLabel>
                        <span className="text-std-16R-150">：</span>
                      </div>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">組織情報</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#">
                            長いページタイトルが入ります
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumbs>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    スロット使用のパンくずリスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <Breadcrumbs aria-labelledby="slot-breadcrumbs-label">
                      <BreadcrumbsLabel
                        className="sr-only"
                        id="slot-breadcrumbs-label"
                      >
                        現在位置
                      </BreadcrumbsLabel>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link href="#">Slotを使ったホーム</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link href="#">Slotを使った組織情報</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link href="#">Slotを使った長いページタイトル</Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrent>現在のページ</BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumbs>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    パンくずリストの使い方
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <p className="text-std-16R-150 mb-4">
                      パンくずリストはユーザーが現在位置を把握し、階層構造を移動するのに役立ちます。
                      特に多階層のウェブサイトやアプリケーションでは、ユーザーのナビゲーションをサポートする重要な要素です。
                    </p>
                    <p className="text-std-16R-150">
                      アクセシビリティの観点から、スクリーンリーダー用のラベルを提供するか、
                      視覚的にラベルを表示することをお勧めします。
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                エラーテキスト（ErrorText）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本のエラーテキスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <ErrorText>＊エラーテキスト</ErrorText>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    フォーム要素との併用
                  </h4>
                  <div className="bg-white p-4 rounded space-y-4">
                    <div>
                      <label
                        htmlFor="error-input"
                        className="text-std-16B-150 block mb-2"
                      >
                        メールアドレス
                      </label>
                      <input
                        id="error-input"
                        type="email"
                        className="w-full border border-error-1 rounded p-2"
                        aria-describedby="error-message"
                        aria-invalid="true"
                      />
                      <ErrorText id="error-message" className="mt-1">
                        ＊有効なメールアドレスを入力してください。
                      </ErrorText>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    複数のエラーメッセージ
                  </h4>
                  <div className="bg-white p-4 rounded space-y-4">
                    <div>
                      <label
                        htmlFor="password-input"
                        className="text-std-16B-150 block mb-2"
                      >
                        パスワード
                      </label>
                      <input
                        id="password-input"
                        type="password"
                        className="w-full border border-error-1 rounded p-2"
                        aria-describedby="password-errors"
                        aria-invalid="true"
                      />
                      <div id="password-errors">
                        <ErrorText className="mt-1">
                          ＊パスワードは8文字以上である必要があります。
                        </ErrorText>
                        <ErrorText className="mt-1">
                          ＊パスワードには少なくとも1つの数字を含める必要があります。
                        </ErrorText>
                        <ErrorText className="mt-1">
                          ＊パスワードには少なくとも1つの特殊文字を含める必要があります。
                        </ErrorText>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    フィールドセット内のエラーテキスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <fieldset aria-describedby="options-error">
                      <legend className="text-std-16B-150 mb-2">選択肢</legend>
                      <div className="space-y-2 mb-2">
                        <div>
                          <input type="radio" name="options" id="option1" />
                          <label
                            htmlFor="option1"
                            className="ml-2 text-std-16R-150"
                          >
                            選択肢1
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="options" id="option2" />
                          <label
                            htmlFor="option2"
                            className="ml-2 text-std-16R-150"
                          >
                            選択肢2
                          </label>
                        </div>
                        <div>
                          <input type="radio" name="options" id="option3" />
                          <label
                            htmlFor="option3"
                            className="ml-2 text-std-16R-150"
                          >
                            選択肢3
                          </label>
                        </div>
                      </div>
                      <ErrorText id="options-error">
                        ＊いずれかの選択肢を選択してください。
                      </ErrorText>
                    </fieldset>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    エラーテキストの使い方
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <p className="text-std-16R-150 mb-4">
                      エラーテキストは、ユーザーがフォームを入力する際に発生したエラーを
                      明確に伝えるために使用します。エラーテキストは以下の特徴を持っています：
                    </p>
                    <ul className="list-disc pl-5 text-std-16R-150 space-y-2">
                      <li>エラーの原因を明確に説明します。</li>
                      <li>問題を解決するための具体的な指示を提供します。</li>
                      <li>
                        アクセシビリティのために適切なARIA属性と関連付けられるべきです。
                      </li>
                      <li>視覚的に目立つよう、赤色で表示されます。</li>
                      <li>
                        一般的に「＊」記号で始まり、エラーであることを明示します。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                チェックボックス
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本のチェックボックス
                  </h4>
                  <div className="mb-4">
                    <Checkbox size="sm">選択肢</Checkbox>
                  </div>
                  <div className="mb-4">
                    <Checkbox size="md">選択肢</Checkbox>
                  </div>
                  <div className="mb-4">
                    <Checkbox size="lg">選択肢</Checkbox>
                  </div>
                  <div className="mb-4">
                    <Checkbox size="sm" defaultChecked>
                      チェック済み
                    </Checkbox>
                  </div>
                  <div>
                    <Checkbox size="sm" aria-label="名前を指定してください" />
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    縦並びチェックボックス
                  </h4>
                  <fieldset>
                    <Legend>
                      ラベル<RequirementBadge>※必須</RequirementBadge>
                    </Legend>
                    <SupportText className="mt-2" id="stacked-support-text">
                      サポートテキスト
                    </SupportText>
                    <div className="mt-2 flex flex-col gap-2">
                      <Checkbox
                        aria-describedby="stacked-support-text"
                        size="sm"
                      >
                        選択肢1
                      </Checkbox>
                      <Checkbox
                        aria-describedby="stacked-support-text"
                        size="sm"
                        defaultChecked
                      >
                        選択肢2
                      </Checkbox>
                      <Checkbox
                        aria-describedby="stacked-support-text"
                        size="sm"
                      >
                        選択肢3
                      </Checkbox>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    横並びチェックボックス
                  </h4>
                  <fieldset>
                    <Legend>
                      ラベル<RequirementBadge>※必須</RequirementBadge>
                    </Legend>
                    <SupportText className="mt-2" id="inline-support-text">
                      サポートテキスト
                    </SupportText>
                    <div className="mt-1 flex flex-wrap gap-x-4">
                      <Checkbox
                        aria-describedby="inline-support-text"
                        size="sm"
                      >
                        選択肢1
                      </Checkbox>
                      <Checkbox
                        aria-describedby="inline-support-text"
                        size="sm"
                        defaultChecked
                      >
                        選択肢2
                      </Checkbox>
                      <Checkbox
                        aria-describedby="inline-support-text"
                        size="sm"
                      >
                        選択肢3
                      </Checkbox>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">エラー状態</h4>
                  <fieldset>
                    <Legend>
                      ラベル<RequirementBadge>※必須</RequirementBadge>
                    </Legend>
                    <SupportText className="mt-2" id="error-support-text">
                      サポートテキスト
                    </SupportText>
                    <div className="mt-1 flex flex-col gap-2">
                      <Checkbox
                        aria-describedby="error-support-text error-text"
                        size="sm"
                        isError
                      >
                        選択肢1
                      </Checkbox>
                      <Checkbox
                        aria-describedby="error-support-text error-text"
                        size="sm"
                        isError
                        defaultChecked
                      >
                        選択肢2
                      </Checkbox>
                      <Checkbox
                        aria-describedby="error-support-text error-text"
                        size="sm"
                        isError
                      >
                        選択肢3
                      </Checkbox>
                    </div>
                    <ErrorText className="mt-2" id="error-text">
                      ＊エラーテキストが入ります。
                    </ErrorText>
                  </fieldset>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">無効化された状態</h4>
                  <fieldset>
                    <Legend>
                      ラベル<RequirementBadge>※必須</RequirementBadge>
                    </Legend>
                    <SupportText className="mt-2" id="disabled-support-text">
                      〜の理由により、この項目は無効化されています。
                    </SupportText>
                    <div className="mt-1 flex flex-col gap-2">
                      <Checkbox
                        aria-describedby="disabled-support-text"
                        size="sm"
                        aria-disabled={true}
                      >
                        選択肢1
                      </Checkbox>
                      <Checkbox
                        aria-describedby="disabled-support-text"
                        size="sm"
                        aria-disabled={true}
                        defaultChecked
                      >
                        選択肢2
                      </Checkbox>
                      <Checkbox
                        aria-describedby="disabled-support-text"
                        size="sm"
                        aria-disabled={true}
                      >
                        選択肢3
                      </Checkbox>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">不確定状態</h4>
                  <div className="mb-4">
                    <Checkbox
                      ref={(el) => {
                        if (el) el.indeterminate = true;
                      }}
                      size="sm"
                    >
                      すべてのスポーツ
                    </Checkbox>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <Checkbox size="sm">サッカー</Checkbox>
                    <Checkbox size="sm" defaultChecked>
                      バスケットボール
                    </Checkbox>
                    <Checkbox size="sm">テニス</Checkbox>
                    <Checkbox size="sm">スイミング</Checkbox>
                    <Checkbox size="sm" defaultChecked>
                      ヨガ
                    </Checkbox>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                インプットテキスト（Input）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本のインプットテキスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="basic-input">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="basic-input-support">
                        サポートテキスト
                      </SupportText>
                      <Input
                        id="basic-input"
                        aria-describedby="basic-input-support"
                        blockSize="lg"
                        placeholder="テキストを入力"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    サイズバリエーション
                  </h4>
                  <div className="bg-white p-4 rounded space-y-4">
                    <div>
                      <Label htmlFor="input-lg" className="mb-2 block">
                        大サイズ（lg）
                      </Label>
                      <Input
                        id="input-lg"
                        blockSize="lg"
                        placeholder="大サイズのインプットテキスト"
                      />
                    </div>

                    <div>
                      <Label htmlFor="input-md" className="mb-2 block">
                        中サイズ（md）
                      </Label>
                      <Input
                        id="input-md"
                        blockSize="md"
                        placeholder="中サイズのインプットテキスト"
                      />
                    </div>

                    <div>
                      <Label htmlFor="input-sm" className="mb-2 block">
                        小サイズ（sm）
                      </Label>
                      <Input
                        id="input-sm"
                        blockSize="sm"
                        placeholder="小サイズのインプットテキスト"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">エラー状態</h4>
                  <div className="bg-white p-4 rounded space-y-6">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="error-input">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="error-support-text">
                        サポートテキスト
                      </SupportText>
                      <Input
                        aria-describedby="error-support-text error-text"
                        aria-invalid={true}
                        id="error-input"
                        isError={true}
                        name="error"
                        required
                        defaultValue=""
                      />
                      <ErrorText id="error-text">＊エラーテキスト</ErrorText>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="filled-error-input">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="filled-error-support-text">
                        サポートテキスト
                      </SupportText>
                      <Input
                        aria-describedby="filled-error-support-text filled-error-text"
                        aria-invalid={true}
                        defaultValue="誤った入力内容"
                        id="filled-error-input"
                        isError={true}
                        name="filled-error"
                        required
                      />
                      <ErrorText id="filled-error-text">
                        ＊エラーテキスト
                      </ErrorText>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">無効化された状態</h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="disabled-input">ラベル</Label>
                      <SupportText id="disabled-support-text">
                        〜の理由により、この項目は無効化されています。
                      </SupportText>
                      <Input
                        aria-describedby="disabled-support-text"
                        aria-disabled={true}
                        defaultValue="入力テキスト"
                        id="disabled-input"
                        name="disabled"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    入力タイプ別のインプットテキスト
                  </h4>
                  <div className="bg-white p-4 rounded space-y-4">
                    <div>
                      <Label htmlFor="text-input" className="mb-2 block">
                        テキスト
                      </Label>
                      <Input
                        id="text-input"
                        type="text"
                        placeholder="テキストを入力"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email-input" className="mb-2 block">
                        メールアドレス
                      </Label>
                      <Input
                        id="email-input"
                        type="email"
                        placeholder="example@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="password-input" className="mb-2 block">
                        パスワード
                      </Label>
                      <Input
                        id="password-input"
                        type="password"
                        placeholder="パスワードを入力"
                      />
                    </div>

                    <div>
                      <Label htmlFor="number-input" className="mb-2 block">
                        数値
                      </Label>
                      <Input
                        id="number-input"
                        type="number"
                        placeholder="数値を入力"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tel-input" className="mb-2 block">
                        電話番号
                      </Label>
                      <Input
                        id="tel-input"
                        type="tel"
                        placeholder="000-0000-0000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    インプットテキストの使い方
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <p className="text-std-16R-150 mb-4">
                      インプットテキストは、ユーザーからの入力を受け取るための基本的なフォーム要素です。
                      適切なラベルとサポートテキストを併用し、アクセシビリティに配慮した実装が重要です。
                    </p>
                    <ul className="list-disc pl-5 text-std-16R-150 space-y-2">
                      <li>
                        必須項目には RequirementBadge を使用して明示します。
                      </li>
                      <li>
                        入力ヒントやフォーマットの説明には SupportText
                        を使用します。
                      </li>
                      <li>
                        エラー状態では isError プロパティを設定し、ErrorText
                        でエラー内容を説明します。
                      </li>
                      <li>
                        無効化が必要な場合は disabled 属性ではなく aria-disabled
                        属性を使用します。
                      </li>
                      <li>
                        適切な入力タイプ（type属性）を設定して、ユーザー体験を向上させます。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                ラベル（Label）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    サイズバリエーション
                  </h4>
                  <div className="bg-white p-4 rounded space-y-4">
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label size="lg">ラベル LG</Label>
                        <p className="text-std-14R-150 mt-1">
                          大サイズのラベル
                        </p>
                      </div>
                      <div>
                        <Label>ラベル MD</Label>
                        <p className="text-std-14R-150 mt-1">
                          標準サイズのラベル（デフォルト）
                        </p>
                      </div>
                      <div>
                        <Label size="sm">ラベル SM</Label>
                        <p className="text-std-14R-150 mt-1">
                          小サイズのラベル
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    フォントウェイトバリエーション
                  </h4>
                  <div className="bg-white p-4 rounded space-y-4">
                    <div className="flex flex-col gap-4">
                      <div>
                        <Label size="lg">ラベル LG</Label>
                        <p className="text-std-14R-150 mt-1">
                          デフォルトのフォントウェイト（太字）
                        </p>
                      </div>
                      <div>
                        <Label className="font-normal" size="lg">
                          ラベル LG
                        </Label>
                        <p className="text-std-14R-150 mt-1">
                          標準フォントウェイト
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    フォーム要素との関連付け
                  </h4>
                  <div className="bg-white p-4 rounded space-y-6">
                    <div>
                      <Label htmlFor="text-input-1">テキスト入力</Label>
                      <input
                        id="text-input-1"
                        type="text"
                        className="block w-full border border-solid-gray-300 rounded mt-1 p-2"
                        placeholder="入力してください"
                      />
                    </div>

                    <div>
                      <Label htmlFor="select-1">ドロップダウン選択</Label>
                      <select
                        id="select-1"
                        className="block w-full border border-solid-gray-300 rounded mt-1 p-2"
                      >
                        <option>選択肢1</option>
                        <option>選択肢2</option>
                        <option>選択肢3</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="textarea-1">複数行テキスト</Label>
                      <textarea
                        id="textarea-1"
                        className="block w-full border border-solid-gray-300 rounded mt-1 p-2"
                        rows={3}
                        placeholder="複数行のテキストを入力"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    ラジオボタン・チェックボックスとの関連付け
                  </h4>
                  <div className="bg-white p-4 rounded space-y-6">
                    <fieldset>
                      <legend>
                        <Label>ラジオボタングループ</Label>
                      </legend>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                          <input type="radio" id="radio-1" name="radio-group" />
                          <Label htmlFor="radio-1" size="sm" className="ml-2">
                            選択肢1
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="radio-2" name="radio-group" />
                          <Label htmlFor="radio-2" size="sm" className="ml-2">
                            選択肢2
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="radio-3" name="radio-group" />
                          <Label htmlFor="radio-3" size="sm" className="ml-2">
                            選択肢3
                          </Label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <legend>
                        <Label>チェックボックスグループ</Label>
                      </legend>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="checkbox-1" />
                          <Label
                            htmlFor="checkbox-1"
                            size="sm"
                            className="ml-2"
                          >
                            選択肢1
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="checkbox-2" />
                          <Label
                            htmlFor="checkbox-2"
                            size="sm"
                            className="ml-2"
                          >
                            選択肢2
                          </Label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="checkbox-3" />
                          <Label
                            htmlFor="checkbox-3"
                            size="sm"
                            className="ml-2"
                          >
                            選択肢3
                          </Label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">ラベルの使い方</h4>
                  <div className="bg-white p-4 rounded">
                    <p className="text-std-16R-150 mb-4">
                      ラベルは、フォーム要素の目的や入力すべき内容を明示するために使用します。
                      アクセシビリティの観点から、関連するフォーム要素とはHTMLの関連付け（htmlFor属性とid属性）を
                      適切に設定することが重要です。
                    </p>
                    <ul className="list-disc pl-5 text-std-16R-150 space-y-2">
                      <li>各フォーム要素に対して明確なラベルを提供します。</li>
                      <li>
                        ラベルとフォーム要素は適切にマークアップして関連付けます。
                      </li>
                      <li>
                        見出しやタイトルとしても使用できますが、フォーム要素との関連付けが主な用途です。
                      </li>
                      <li>
                        視覚的な階層構造を表現するため、適切なサイズとフォントウェイトを選択します。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                セレクトボックス（Select）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本のセレクトボックス
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="basic-select">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="basic-select-support">
                        サポートテキスト
                      </SupportText>
                      <Select
                        id="basic-select"
                        aria-describedby="basic-select-support"
                        blockSize="lg"
                        required
                      >
                        <option value="">選択してください</option>
                        <option value="1">選択肢1</option>
                        <option value="2">選択肢2</option>
                        <option value="3">選択肢3</option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">エラー状態</h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="error-select">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="error-select-support">
                        サポートテキスト
                      </SupportText>
                      <Select
                        id="error-select"
                        aria-describedby="error-select-support error-select-text"
                        aria-invalid={true}
                        isError={true}
                        required
                      >
                        <option value="">選択してください</option>
                        <option value="1">選択肢1</option>
                        <option value="2">選択肢2</option>
                        <option value="3">選択肢3</option>
                      </Select>
                      <ErrorText id="error-select-text">
                        ＊エラーテキスト
                      </ErrorText>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">無効化された状態</h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="disabled-select">ラベル</Label>
                      <SupportText id="disabled-select-support">
                        〜の理由により、この項目は無効化されています。
                      </SupportText>
                      <Select
                        id="disabled-select"
                        aria-describedby="disabled-select-support"
                        aria-disabled={true}
                      >
                        <option value="">選択してください</option>
                        <option value="1">選択肢1</option>
                        <option value="2">選択肢2</option>
                        <option value="3">選択肢3</option>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">グループ化された例</h4>
                  <div className="bg-white p-4 rounded">
                    <fieldset className="flex flex-col gap-2">
                      <Legend size="lg">フォームコントロールグループ</Legend>
                      <SupportText id="group-support-text">
                        サポートテキスト
                      </SupportText>
                      <div className="flex gap-4">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="group-select-1">ラベル1</Label>
                          <Select
                            id="group-select-1"
                            aria-describedby="group-support-text"
                          >
                            <option value="">選択してください</option>
                            <option value="1">選択肢1</option>
                            <option value="2">選択肢2</option>
                            <option value="3">選択肢3</option>
                          </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="group-select-2">ラベル2</Label>
                          <Select
                            id="group-select-2"
                            aria-describedby="group-support-text"
                          >
                            <option value="">選択してください</option>
                            <option value="1">選択肢1</option>
                            <option value="2">選択肢2</option>
                            <option value="3">選択肢3</option>
                          </Select>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                テキストエリア（Textarea）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本のテキストエリア
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="basic-textarea">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="basic-textarea-support">
                        サポートテキスト
                      </SupportText>
                      <Textarea
                        id="basic-textarea"
                        aria-describedby="basic-textarea-support"
                        required
                        placeholder="テキストを入力してください"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    エラー状態のテキストエリア
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="error-textarea">
                        ラベル<RequirementBadge>※必須</RequirementBadge>
                      </Label>
                      <SupportText id="error-textarea-support">
                        サポートテキスト
                      </SupportText>
                      <Textarea
                        id="error-textarea"
                        aria-describedby="error-textarea-support error-textarea-text"
                        aria-invalid={true}
                        isError={true}
                        required
                      />
                      <ErrorText id="error-textarea-text">
                        ＊エラーテキスト
                      </ErrorText>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    無効化されたテキストエリア
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="disabled-textarea">ラベル</Label>
                      <SupportText id="disabled-textarea-support">
                        〜の理由により、この項目は無効化されています。
                      </SupportText>
                      <Textarea
                        id="disabled-textarea"
                        aria-describedby="disabled-textarea-support"
                        aria-disabled={true}
                        defaultValue="入力テキスト"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    サイズ指定のテキストエリア
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="sized-textarea">
                        cols, rows 属性を使用したテキストエリア
                      </Label>
                      <SupportText id="sized-textarea-support">
                        cols 属性の値に30、rows
                        属性の値に4を指定したテキストエリアの例
                      </SupportText>
                      <Textarea
                        id="sized-textarea"
                        aria-describedby="sized-textarea-support"
                        rows={4}
                        cols={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                リスト
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">順序なしリスト</h4>
                  <Ul>
                    <li className="text-std-16R-150">リストアイテム 1</li>
                    <li className="text-std-16R-150">リストアイテム 2</li>
                    <li className="text-std-16R-150">リストアイテム 3</li>
                  </Ul>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">順序付きリスト</h4>
                  <Ol>
                    <li className="text-std-16R-150">最初のアイテム</li>
                    <li className="text-std-16R-150">2番目のアイテム</li>
                    <li className="text-std-16R-150">3番目のアイテム</li>
                  </Ol>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                リンク
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-18B-150 mb-4">標準リンク</h4>
                  <Link href="#" className="text-std-16R-150">
                    標準リンク
                  </Link>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    ユーティリティリンク
                  </h4>
                  <UtilityLink href="#" className="text-std-16R-150">
                    ユーティリティリンク
                    <UtilityLinkExternalLinkIcon />
                  </UtilityLink>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                区切り線（Divider）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    標準の区切り線（Solid）
                  </h4>
                  <div className="space-y-8 bg-white p-4 rounded">
                    <div>
                      <p className="text-std-14R-150 mb-2">標準の線（1px）：</p>
                      <Divider />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）：
                      </p>
                      <Divider color="gray-536" />
                      <p className="text-std-14R-150 mt-2 mb-2">黒：</p>
                      <Divider color="black" />
                    </div>

                    <div>
                      <p className="text-std-14R-150 mb-2">太い線（2px）：</p>
                      <Divider className="border-t-2" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・太い線（2px）：
                      </p>
                      <Divider color="gray-536" className="border-t-2" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・太い線（2px）：
                      </p>
                      <Divider color="black" className="border-t-2" />
                    </div>

                    <div>
                      <p className="text-std-14R-150 mb-2">
                        より太い線（3px）：
                      </p>
                      <Divider className="border-t-[3px]" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・より太い線（3px）：
                      </p>
                      <Divider color="gray-536" className="border-t-[3px]" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・より太い線（3px）：
                      </p>
                      <Divider color="black" className="border-t-[3px]" />
                    </div>

                    <div>
                      <p className="text-std-14R-150 mb-2">
                        最も太い線（4px）：
                      </p>
                      <Divider className="border-t-4" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・最も太い線（4px）：
                      </p>
                      <Divider color="gray-536" className="border-t-4" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・最も太い線（4px）：
                      </p>
                      <Divider color="black" className="border-t-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    点線の区切り線（Dash）
                  </h4>
                  <div className="space-y-8 bg-white p-4 rounded">
                    <div>
                      <p className="text-std-14R-150 mb-2">
                        標準の点線（1px）：
                      </p>
                      <Divider className="border-dashed" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・点線（1px）：
                      </p>
                      <Divider color="gray-536" className="border-dashed" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・点線（1px）：
                      </p>
                      <Divider color="black" className="border-dashed" />
                    </div>

                    <div>
                      <p className="text-std-14R-150 mb-2">太い点線（2px）：</p>
                      <Divider className="border-dashed border-t-2" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・太い点線（2px）：
                      </p>
                      <Divider
                        color="gray-536"
                        className="border-dashed border-t-2"
                      />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・太い点線（2px）：
                      </p>
                      <Divider
                        color="black"
                        className="border-dashed border-t-2"
                      />
                    </div>

                    <div>
                      <p className="text-std-14R-150 mb-2">
                        より太い点線（3px）：
                      </p>
                      <Divider className="border-dashed border-t-[3px]" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・より太い点線（3px）：
                      </p>
                      <Divider
                        color="gray-536"
                        className="border-dashed border-t-[3px]"
                      />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・より太い点線（3px）：
                      </p>
                      <Divider
                        color="black"
                        className="border-dashed border-t-[3px]"
                      />
                    </div>

                    <div>
                      <p className="text-std-14R-150 mb-2">
                        最も太い点線（4px）：
                      </p>
                      <Divider className="border-dashed border-t-4" />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        グレー（536）・最も太い点線（4px）：
                      </p>
                      <Divider
                        color="gray-536"
                        className="border-dashed border-t-4"
                      />
                      <p className="text-std-14R-150 mt-2 mb-2">
                        黒・最も太い点線（4px）：
                      </p>
                      <Divider
                        color="black"
                        className="border-dashed border-t-4"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">区切り線の使い方</h4>
                  <div className="bg-white p-4 rounded">
                    <p className="text-std-16R-150 mb-4">
                      区切り線はコンテンツの区切りやセクションの分離に使用します。デフォルトでは線の太さは1px、スタイルはsolidに設定されています。
                      変更したい場合はTailwind
                      CSSのクラスを使って上書きしてください。
                    </p>
                    <Divider className="my-4" />
                    <p className="text-std-16R-150">
                      このように、テキストブロック間の視覚的な区切りとして最適です。
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                順序なしリスト（Ul）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    基本の順序なしリスト
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <Ul>
                      <li className="text-std-16R-150">リストアイテム 1</li>
                      <li className="text-std-16R-150">リストアイテム 2</li>
                      <li className="text-std-16R-150">リストアイテム 3</li>
                      <li className="text-std-16R-150">リストアイテム 4</li>
                      <li className="text-std-16R-150">リストアイテム 5</li>
                    </Ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    余白のバリエーション
                  </h4>
                  <div className="bg-white p-4 rounded space-y-6">
                    <div>
                      <p className="text-std-16B-150 mb-2">小さな余白 (4px)</p>
                      <Ul className="[&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1 [&_li]:py-1">
                        <li>サンプルサンプル</li>
                        <li>サンプルサンプル</li>
                        <li>サンプルサンプル</li>
                      </Ul>
                    </div>

                    <div>
                      <p className="text-std-16B-150 mb-2">
                        中程度の余白 (8px)
                      </p>
                      <Ul className="[&_:where(ol,ul)]:mt-2 [&_:where(ol,ul)]:-mb-2 [&_li]:py-2">
                        <li>サンプルサンプル</li>
                        <li>サンプルサンプル</li>
                        <li>サンプルサンプル</li>
                      </Ul>
                    </div>

                    <div>
                      <p className="text-std-16B-150 mb-2">大きな余白 (12px)</p>
                      <Ul className="[&_:where(ol,ul)]:mt-3 [&_:where(ol,ul)]:-mb-3 [&_li]:py-3">
                        <li>サンプルサンプル</li>
                        <li>サンプルサンプル</li>
                        <li>サンプルサンプル</li>
                      </Ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">入れ子リスト</h4>
                  <div className="bg-white p-4 rounded">
                    <Ul className="[&_:where(ol,ul)]:mt-2 [&_:where(ol,ul)]:-mb-2 [&_li]:py-2">
                      <li>第一階層アイテム 1</li>
                      <li>第一階層アイテム 2</li>
                      <li>
                        第一階層アイテム 3
                        <Ul>
                          <li>第二階層アイテム 1</li>
                          <li>第二階層アイテム 2</li>
                          <li>
                            第二階層アイテム 3
                            <Ul>
                              <li>第三階層アイテム 1</li>
                              <li>第三階層アイテム 2</li>
                              <li>第三階層アイテム 3</li>
                            </Ul>
                          </li>
                          <li>第二階層アイテム 4</li>
                        </Ul>
                      </li>
                      <li>第一階層アイテム 4</li>
                    </Ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    順序付きリストとの組み合わせ
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <Ul className="[&_:where(ol,ul)]:mt-1 [&_:where(ol,ul)]:-mb-1 [&_li]:py-1">
                      <li>順序なしリストアイテム 1</li>
                      <li>順序なしリストアイテム 2</li>
                      <li>
                        順序なしリストアイテム 3
                        <Ol>
                          <li>順序付きリストアイテム 1</li>
                          <li>順序付きリストアイテム 2</li>
                          <li>順序付きリストアイテム 3</li>
                          <li>順序付きリストアイテム 4</li>
                        </Ol>
                      </li>
                      <li>順序なしリストアイテム 4</li>
                    </Ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-12">
              <h3 className="text-std-24B-150 mb-6 pb-2 border-b border-solid-gray-300">
                モーダルダイアログ（Dialog）
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-std-18B-150 mb-4">基本のダイアログ</h4>
                  <div className="bg-white p-4 rounded">
                    <div className="mb-4">
                      <p className="text-std-16R-150">
                        ダイアログは、ユーザーに重要な情報を表示したり、アクションの確認を求めたりするために使用します。
                        以下のボタンをクリックすると、基本のダイアログが表示されます。
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        const dialog =
                          document.getElementById("example-dialog");
                        if (dialog instanceof HTMLDialogElement) {
                          dialog.showModal();
                        }
                      }}
                      size="lg"
                      variant="solid-fill"
                    >
                      ダイアログ表示
                    </Button>

                    <Dialog
                      id="example-dialog"
                      aria-labelledby="example-heading1"
                      className="max-w-[calc(560/16*1rem)]"
                    >
                      <DialogBody>
                        <h2
                          className="text-std-24B-150 desktop:text-std-28B-150"
                          id="example-heading1"
                        >
                          ダイアログタイトル
                        </h2>
                        <p className="text-std-16R-150">
                          ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
                        </p>
                        <div className="mt-2 flex w-full max-w-xs flex-col gap-4 desktop:mt-6">
                          <Button
                            onClick={() => {
                              const dialog =
                                document.getElementById("example-dialog");
                              if (dialog instanceof HTMLDialogElement) {
                                dialog.close();
                              }
                            }}
                            size="lg"
                            variant="solid-fill"
                          >
                            中断する
                          </Button>
                          <Button
                            onClick={() => {
                              const dialog =
                                document.getElementById("example-dialog");
                              if (dialog instanceof HTMLDialogElement) {
                                dialog.close();
                              }
                            }}
                            size="lg"
                            variant="text"
                          >
                            キャンセル
                          </Button>
                        </div>
                      </DialogBody>
                    </Dialog>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">
                    水平配置のアクションボタン
                  </h4>
                  <div className="bg-white p-4 rounded">
                    <div className="mb-4">
                      <p className="text-std-16R-150">
                        デスクトップ表示の場合、アクションボタンを水平方向に配置できます。
                        モバイル表示では、ボタンは縦に並びます。
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        const dialog =
                          document.getElementById("horizontal-dialog");
                        if (dialog instanceof HTMLDialogElement) {
                          dialog.showModal();
                        }
                      }}
                      size="lg"
                      variant="solid-fill"
                    >
                      水平配置ダイアログ表示
                    </Button>

                    <Dialog
                      id="horizontal-dialog"
                      aria-labelledby="example-heading2"
                      className="max-w-[calc(640/16*1rem)]"
                    >
                      <DialogBody>
                        <h2
                          className="text-std-24B-150 desktop:text-std-28B-150"
                          id="example-heading2"
                        >
                          ダイアログタイトル
                        </h2>
                        <p className="text-std-16R-150">
                          ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。ダイアログの補助テキストが入ります。
                        </p>
                        <div className="mt-2 flex w-full flex-col gap-4 desktop:mt-6 desktop:flex-row-reverse">
                          <Button
                            onClick={() => {
                              const dialog =
                                document.getElementById("horizontal-dialog");
                              if (dialog instanceof HTMLDialogElement) {
                                dialog.close();
                              }
                            }}
                            size="lg"
                            variant="solid-fill"
                          >
                            確定する
                          </Button>
                          <Button
                            onClick={() => {
                              const dialog =
                                document.getElementById("horizontal-dialog");
                              if (dialog instanceof HTMLDialogElement) {
                                dialog.close();
                              }
                            }}
                            size="lg"
                            variant="outline"
                          >
                            前の画面に戻る
                          </Button>
                          <Button
                            className="desktop:mr-auto"
                            onClick={() => {
                              const dialog =
                                document.getElementById("horizontal-dialog");
                              if (dialog instanceof HTMLDialogElement) {
                                dialog.close();
                              }
                            }}
                            size="lg"
                            variant="text"
                          >
                            キャンセル
                          </Button>
                        </div>
                      </DialogBody>
                    </Dialog>
                  </div>
                </div>

                <div>
                  <h4 className="text-std-18B-150 mb-4">アラートダイアログ</h4>
                  <div className="bg-white p-4 rounded">
                    <div className="mb-4">
                      <p className="text-std-16R-150">
                        アラートダイアログは、重要なメッセージやエラーをユーザーに伝えるために使用します。
                        role=alertdialog属性を使用して、スクリーンリーダーにアラートであることを伝えます。
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        const dialog = document.getElementById("alert-dialog");
                        if (dialog instanceof HTMLDialogElement) {
                          dialog.showModal();
                        }
                      }}
                      size="lg"
                      variant="solid-fill"
                    >
                      アラートダイアログ表示
                    </Button>

                    <Dialog
                      id="alert-dialog"
                      aria-labelledby="alertdialog-heading"
                      role="alertdialog"
                    >
                      <DialogBody>
                        <h2
                          className="text-std-24B-150 desktop:text-std-28B-150"
                          id="alertdialog-heading"
                        >
                          アラートダイアログタイトル
                        </h2>
                        <p className="text-std-16R-150">
                          これはアラートダイアログの例です。ユーザーにとって緊急性の高い通知内容が入ります。
                        </p>
                        <div className="mt-2 flex w-full flex-col gap-4 desktop:mt-6 desktop:flex-row-reverse">
                          <Button
                            onClick={() => {
                              const dialog =
                                document.getElementById("alert-dialog");
                              if (dialog instanceof HTMLDialogElement) {
                                dialog.close();
                              }
                            }}
                            size="md"
                            variant="solid-fill"
                          >
                            OK
                          </Button>
                        </div>
                      </DialogBody>
                    </Dialog>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* Design Guidelines */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">カラー</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">ブランドカラー</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-4 bg-gov-blue-1 text-white rounded">
                      gov-blue-1
                    </div>
                    <div className="p-4 bg-gov-blue-2 text-white rounded">
                      gov-blue-2
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">アクセントカラー</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-4 bg-success-1 text-white rounded">
                      success-1
                    </div>
                    <div className="p-4 bg-warning-1 text-black rounded">
                      warning-1
                    </div>
                    <div className="p-4 bg-error-1 text-white rounded">
                      error-1
                    </div>
                    <div className="p-4 bg-error-1 text-white rounded">
                      error-1
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">グレースケール</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-4 bg-solid-gray-800 text-white rounded">
                      solid-gray-800
                    </div>
                    <div className="p-4 bg-solid-gray-500 text-white rounded">
                      solid-gray-500
                    </div>
                    <div className="p-4 bg-solid-gray-200 text-black rounded">
                      solid-gray-200
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-std-14R-150">
                    デジタル庁デザインシステムでは、アクセシビリティ要件に準拠するためにWCAG
                    2.1
                    AAの色のコントラスト比を満たすカラーパレットを採用しています。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">
                タイポグラフィ
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">見出し（Heading）</h4>
                  <div className="space-y-2">
                    <p className="text-std-32B-150">
                      text-std-32B-150（見出し大）
                    </p>
                    <p className="text-std-24B-150">
                      text-std-24B-150（見出し中）
                    </p>
                    <p className="text-std-18B-150">
                      text-std-18B-150（見出し小）
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">本文（Body）</h4>
                  <div className="space-y-2">
                    <p className="text-std-16R-150">text-std-16R-150（標準）</p>
                    <p className="text-std-16B-150">text-std-16B-150（強調）</p>
                    <p className="text-std-14R-150">text-std-14R-150（補足）</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">
                    アウトライン（Outline）
                  </h4>
                  <div className="space-y-2">
                    <p className="text-oln-16R-150">text-oln-16R-150（標準）</p>
                    <p className="text-oln-16B-150">text-oln-16B-150（強調）</p>
                  </div>
                </div>
                <div>
                  <p className="text-std-14R-150">
                    タイポグラフィの命名規則は「スタイル-サイズウェイト-行間」の形式で、例えば「text-std-16R-150」は「標準スタイル・16px・レギュラーウェイト・行間150%」を表します。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">
                レイアウト
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">グリッドシステム</h4>
                  <div className="grid grid-cols-12 gap-2 bg-gray-100 p-2 rounded">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gov-blue-1 h-10 rounded flex items-center justify-center text-white text-std-14B-150"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    デジタル庁デザインシステムでは12カラムのグリッドシステムを採用しており、レスポンシブデザインに対応しています。
                  </p>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">ブレイクポイント</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-gray-100 rounded">
                      <span className="text-std-14B-150">モバイル</span>
                      <span className="text-std-14R-150">〜599px</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-100 rounded">
                      <span className="text-std-14B-150">タブレット</span>
                      <span className="text-std-14R-150">600px〜1023px</span>
                    </div>
                    <div className="flex justify-between p-2 bg-gray-100 rounded">
                      <span className="text-std-14B-150">デスクトップ</span>
                      <span className="text-std-14R-150">1024px〜</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">
                リンクテキスト
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">標準リンク</h4>
                  <div className="p-4 bg-white border border-gray-200 rounded">
                    <Link href="#" className="text-std-16R-150">
                      標準リンク
                    </Link>
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    標準リンクは本文内で使用され、下線によって識別可能です。ホバー時には下線が太くなります。
                  </p>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">
                    ユーティリティリンク
                  </h4>
                  <div className="p-4 bg-white border border-gray-200 rounded">
                    <UtilityLink href="#" className="text-std-16R-150">
                      ユーティリティリンク
                      <UtilityLinkExternalLinkIcon />
                    </UtilityLink>
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    ユーティリティリンクは主にフッターやサイドナビゲーションで使用され、必要に応じてアイコンを伴います。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">
                余白（Spacing）
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">基本単位</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-16 h-4 bg-gov-blue-1 mr-2"></div>
                      <span className="text-std-14R-150">4px - 最小単位</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-8 bg-gov-blue-1 mr-2"></div>
                      <span className="text-std-14R-150">8px - 基本単位</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gov-blue-1 mr-2"></div>
                      <span className="text-std-14R-150">16px - 2倍単位</span>
                    </div>
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    余白は8pxを基本単位とし、コンポーネント間の関係性や階層構造を明確にするために一貫して使用します。
                  </p>
                </div>
                <div>
                  <h4 className="text-std-16B-150 mb-2">
                    コンポーネント内余白
                  </h4>
                  <div className="p-4 bg-gray-100 rounded">
                    <div className="p-4 bg-white border border-dashed border-gov-blue-1 rounded">
                      <p className="text-std-14R-150">コンポーネント内の余白</p>
                    </div>
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    各コンポーネント内の余白はコンテンツの可読性と操作性を確保するために、8px間隔（8px、16px、24px、32px）で設計されています。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">
                角の形状（Radius）
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">
                    コンポーネント種別による角丸
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="h-16 bg-gov-blue-1 rounded-none mb-2"></div>
                      <p className="text-std-14R-150 text-center">
                        0px - 角なし
                      </p>
                    </div>
                    <div>
                      <div className="h-16 bg-gov-blue-1 rounded-md mb-2"></div>
                      <p className="text-std-14R-150 text-center">4px - 小</p>
                    </div>
                    <div>
                      <div className="h-16 bg-gov-blue-1 rounded-lg mb-2"></div>
                      <p className="text-std-14R-150 text-center">8px - 大</p>
                    </div>
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    角丸は一貫したビジュアルアイデンティティを保ちながら、コンポーネントの種類によって適切な半径を選択します。
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-std-20B-150 mb-4 text-gov-blue-1">
                エレベーション（影）
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-std-16B-150 mb-2">階層表現</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="h-16 bg-white rounded shadow-sm mb-2 flex items-center justify-center">
                        <span className="text-std-14B-150">低</span>
                      </div>
                      <p className="text-std-14R-150 text-center">shadow-sm</p>
                    </div>
                    <div>
                      <div className="h-16 bg-white rounded shadow mb-2 flex items-center justify-center">
                        <span className="text-std-14B-150">中</span>
                      </div>
                      <p className="text-std-14R-150 text-center">shadow</p>
                    </div>
                    <div>
                      <div className="h-16 bg-white rounded shadow-lg mb-2 flex items-center justify-center">
                        <span className="text-std-14B-150">高</span>
                      </div>
                      <p className="text-std-14R-150 text-center">shadow-lg</p>
                    </div>
                  </div>
                  <p className="text-std-14R-150 mt-2">
                    エレベーションは要素の階層構造を視覚的に表現するために使用され、ユーザーの注目を集めるコンポーネントほど高いエレベーションを適用します。
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-std-18B-150">
                デジタル庁デザインシステム コンポーネント一覧
              </p>
              <p className="text-std-14R-150 text-gray-300">
                Next.js 15 + TypeScript + @digital-go-jp/tailwind-theme-plugin
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <UtilityLink href="#">
                利用規約
                <UtilityLinkExternalLinkIcon />
              </UtilityLink>
              <UtilityLink href="#">
                プライバシーポリシー
                <UtilityLinkExternalLinkIcon />
              </UtilityLink>
              <UtilityLink href="#">
                お問い合わせ
                <UtilityLinkExternalLinkIcon />
              </UtilityLink>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-std-14R-150 text-gray-400 text-center">
              © 2025 デジタル庁
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
