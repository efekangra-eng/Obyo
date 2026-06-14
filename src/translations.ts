/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationSchema } from './types';

export const translations: Record<'TR' | 'EN', TranslationSchema> = {
  TR: {
    nav: {
      comingSoon: 'KAYIT AKTİF',
      whitepaper: 'Özellik Raporu',
      interactiveDemo: 'Platform Önizleme',
      register: 'VIP Sıra Al',
      contact: 'İletişim ve Destek',
    },
    hero: {
      badge: '15 TEMMUZ 2026 • BİNARY OPSİYON DEVRİMİ',
      titleFirst: 'Güvenli, Yüksek Hızlı',
      titleHighlight: 'İkili Opsiyon',
      titleSecond: 'Ticaret Platformu',
      subtitle: 'Obyo Trade profesyonel yatırımcılar için milisaniyelik işlem hızı, %95\'e varan yüksek kazanç oranları ve benzersiz derin korumalı güvenlik teknolojileriyle geliyor. Erken kaydınızı oluşturup lansman gününe özel hediyeleri kaçırmayın!',
      primaryCta: 'VIP Bekleme Listesine Katıl',
      secondaryCta: 'Platformu İncele',
      activeUsersBadge: 'Kayıtlı VIP Yatırımcı Sırası Aktif',
    },
    countdown: {
      days: 'GÜN',
      hours: 'SAAT',
      minutes: 'DAKİKA',
      seconds: 'SANİYE',
      remainingTime: 'LANSMANA KALAN SÜRE',
      readyAlert: 'Obyo Trade Altyapısı Büyük Çıkış İçin Test Modunda!',
    },
    simulator: {
      title: 'Erken Erişim Kar Getiri Simülatörü',
      subtitle: 'Platform aktifleştiğinde işlemlerin ne kadar hızlı sonuçlanacağını kendiniz test edin. Bir yön tahmini yapın ve demo işlem açın!',
      assetLabel: 'Aktif Varlık Sınıfı',
      balanceLabel: 'Bakiye',
      amountLabel: 'Miktar ($)',
      returnRate: 'Kazanç Oranı',
      estPayout: 'Tahmini Getiri',
      callBtn: 'Yazı / Yukarı ⬆',
      putBtn: 'Tura / Aşağı ⬇',
      placeTrade: 'Demo İşlemi Gönder',
      waitingResult: 'Piyasa İşleniyor...',
      winMessage: 'Tebrikler! Öngörünüz doğru çıktı.',
      lossMessage: 'İşlem Başarısız. Yeni bir strateji deneyebilirsiniz.',
      tryAgain: 'Tekrar Dene',
      activeDemoHint: 'Bu gerçek olmayan piyasa verileriyle çalışan bir hız simülasyonudur ve size platform konseptini sunar.',
      totalWins: 'Başarılı',
      totalLosses: 'Başarısız',
    },
    features: {
      sectionTitle: 'Profesyoneller İçin İnovasyon',
      sectionSubtitle: 'Obyo Trade, size rakiplerinizden üstün kılacak üst düzey altyapı yetenekleriyle donatıldı',
      lightningTitle: 'Ultra Hızlı İşlem İletimi',
      lightningDesc: 'Sorgulama ve emir gönderimleri sadece 30ms sürer. Kayma (slippage) olmadan, tam bastığınız saniye değerinden opsiyon aktif olur.',
      payoutTitle: '%95\'e Varan Yüksek Kar Oranları',
      payoutDesc: 'En aktif paritelerde rakiplerin üzerinde kazanç oranları ve avantajlı spread çarpanları ile sermayenizi hızla büyütün.',
      secureTitle: 'Kurumsal Seviye Güvenlik Altyapısı',
      secureDesc: 'Tüm kullanıcı bakiyeleri soğuk cüzdan ve şifrelenmiş banka güvenceli emanet hesaplarında korunur, 2FA şifreleme ve SSL ile güvence altındadır.',
      responsiveTitle: 'Mobil ve PC Kesintisiz Uyum',
      responsiveDesc: 'Masaüstü yüksek performanslı web terminalinden, tüm cep telefonu ve tablet ekranlarında kusursuz çalışan web platformuna kadar her an yanınızda.',
    },
    register: {
      title: 'Finansal Özgürlüğe Erken Adım Atın',
      subtitle: 'Lansman olan 15 Temmuz günü ilk kaydolan VIP bekleme listesine özel ilk yatırıma %100 bakiye bonusu kazanacaksınız. Şimdi yerinizi ayırtın.',
      placeholderName: 'Adınız Soyadınız',
      placeholderEmail: 'E-posta adresiniz',
      roleLabel: 'Yatırımcı Profiliniz',
      roleRetail: 'Bireysel Yatırımcı',
      roleVip: 'VIP / Hacimli Yatırımcı',
      rolePartner: 'Affiliate / Ortaklık Temsilcisi',
      invalidEmailErr: 'Lütfen geçerli bir e-posta adresi yazın.',
      requiredErr: 'Bu alan zorunludur.',
      successMessage: 'Tebrikler! Obyo Trade ön kaydınız başarıyla tamamlandı.',
      registeredBefore: 'Bu e-posta ile zaten ön kayıt yapılmış!',
      queueNumber: 'VIP Sıra Numaranız:',
      ctaButton: 'Bekleme Listesine Katıl',
    },
    faq: {
      sectionTitle: 'Sıkça Sorulan Sorular',
      sectionSubtitle: 'Platformumuz, ticaret kurallarımız ve lansmanımız hakkında her şey',
      items: [
        {
          q: 'Obyo Trade nedir ve nasıl çalışır?',
          a: 'Obyo Trade, belirli finansal varlıkların (döviz çiftleri, emtialar, kripto paralar) fiyatlarının belirli bir süre içerisinde yukarı mı yoksa aşağı mı hareket edeceğini tahmin etmeye dayalı yüksek hızlı bir ikili opsiyon ticaret platformudur.'
        },
        {
          q: 'Lansman ne zaman ve ne zaman işlem yapabilirim?',
          a: 'Platformumuz resmi olarak 15 Temmuz 2026 tarihinde, Türkiye saatiyle 12:00\'de tam işlevsellik ile yayına girecektir. Geri sayım bittiği an gerçek hesap açılışları açılacaktır.'
        },
        {
          q: 'Güvenlik ve lisans durumu nedir?',
          a: 'Obyo Trade, küresel standartlarda finansal sağlayıcı ortaklarıyla çalışmakta olup, veri şifreleme ve emanet hesap (custodian block) korumalarına sahiptir. Resmi tescil ve lisans numaralarımız lansman günü sitede şeffafça paylaşılacaktır.'
        },
        {
          q: 'Nasıl para yatırabilir ve çekebilirim?',
          a: 'Yatırımcılarımız banka havalesi, EFT, Visa/Mastercard kredi kartlarının yanı sıra USDT (TRC20/ERC20) ve Bitcoin gibi kripto para yöntemleriyle 7/24 anında para yatırma ve çekme yapabileceklerdir. Alt çekim limiti bulunmamaktadır.'
        },
        {
          q: 'Neden erken kayıt olmalıyım?',
          a: 'Erken kaydolup bekleme listesine dahil olan ilk 2000 kullanıcımıza, 15 Temmuz lansmanında yapacakları ilk yatırıma özel %100 Hoş Geldin Bonusu, sıfır komisyonlu özel VIP hesap statüsü ve ücretsiz uzman analiz kanalı üyeliği tanımlanacaktır.'
        }
      ]
    },
    footer: {
      riskWarningTitle: 'ÖNEMLİ RİSK UYARISI',
      riskWarningText: 'İkili opsiyon ticareti yüksek derecede spekülatiftir, önemli derecede kayıp riski içerir ve tüm yatırımcılar için uygun olmayabilir. Yatırım yapmadan önce potansiyel risklerin farkında olmanız gerekmektedir. Kaybetmeyi göze alamayacağınız fonlarla işlem yapmayınız. Obyo Trade, site açılışına kadar herhangi bir fon toplamaz ve gerçek yatırım kabul etmez. Sitemizdeki tüm simülasyonlar tanıtım ve konsept amaçlıdır.',
      allRightsReserved: 'Obyo Trade Finansal Teknolojileri © 2026. Tüm Hakları Saklıdır.',
      tradeSecures: 'Üst Düzey Güvenli Altyapı • SSL Şifreli Koruma • Cold Wallet Depolama'
    }
  },
  EN: {
    nav: {
      comingSoon: 'SIGNUP ON',
      whitepaper: 'Whitepaper',
      interactiveDemo: 'Platform Preview',
      register: 'Get VIP Access',
      contact: 'Support & Contact',
    },
    hero: {
      badge: 'JULY 15, 2026 • THE BINARY OPTION REVOLUTION',
      titleFirst: 'Secure, High-Speed',
      titleHighlight: 'Binary Options',
      titleSecond: 'Trading Platform',
      subtitle: 'Obyo Trade is arriving for professional traders with millisecond trade execution speeds, high payouts reaching up to 95%, and modern absolute cyber-protection. Secure your early registration to claim exclusive launch day benefits!',
      primaryCta: 'Join VIP Waiting List',
      secondaryCta: 'View Platform',
      activeUsersBadge: 'VIP Trader Intake Queue Is Active',
    },
    countdown: {
      days: 'DAYS',
      hours: 'HOURS',
      minutes: 'MINS',
      seconds: 'SECS',
      remainingTime: 'TIME UNTIL LAUNCH',
      readyAlert: 'Obyo Trade Infrastructure is in Test Mode Ahead of the Big Release!',
    },
    simulator: {
      title: 'Early Access Profit Simulator',
      subtitle: 'Test how rapidly trades will settle once our platforms go live. Make a directional prediction and open a demo trade!',
      assetLabel: 'Asset Class',
      balanceLabel: 'Balance',
      amountLabel: 'Amount ($)',
      returnRate: 'Profit Rate',
      estPayout: 'Est. Payout',
      callBtn: 'Call / Upward ⬆',
      putBtn: 'Put / Downward ⬇',
      placeTrade: 'Execute Demo Trade',
      waitingResult: 'Processing on Market Feed...',
      winMessage: 'Congratulations! Your prediction was accurate.',
      lossMessage: 'Trade unsuccessful. You can try another strategy.',
      tryAgain: 'Try Again',
      activeDemoHint: 'This speed simulator is powered by mock market candles for platform concept demonstration purposes.',
      totalWins: 'Successful',
      totalLosses: 'Unsuccessful',
    },
    features: {
      sectionTitle: 'Innovation Built for Professionals',
      sectionSubtitle: 'Obyo Trade is loaded with premium low-latency capabilities to give you the defining edge over markets',
      lightningTitle: 'Ultra-Fast Order Engine',
      lightningDesc: 'Request routing and executions take only 30ms. No slippage—your trade opens exactly where you clicked.',
      payoutTitle: 'High Returns Up to 95%',
      payoutDesc: 'Grow your investment capital with advantageous payout percentages and competitive spread margins on hot trading pairs.',
      secureTitle: 'Institutional-Grade Security',
      secureDesc: 'User funds are secured in cold storage wallets & bank-backed custodian accounts. Guarded continuously by 2FA & end-to-end SSL.',
      responsiveTitle: 'Seamless Desktop & Mobile UIs',
      responsiveDesc: 'Move from our desktop web terminal to fully custom mobile web interfaces that flow flawlessly across all screens & devices without downloading any apps.',
    },
    register: {
      title: 'Take the Early Step to Financial Freedom',
      subtitle: 'Users registered in our pre-launch list receive a massive 100% deposit bonus, zero-commission VIP structures, and private expert analysis channel invites. Mark your spot today!',
      placeholderName: 'Your Full Name',
      placeholderEmail: 'Your Email Address',
      roleLabel: 'Trader Profile Type',
      roleRetail: 'Retail Trader',
      roleVip: 'VIP / High Volume Trader',
      rolePartner: 'Affiliate Partner / Representative',
      invalidEmailErr: 'Please input a valid email address.',
      requiredErr: 'This field is required.',
      successMessage: 'Congratulations! Your Obyo Trade pre-registration is secured.',
      registeredBefore: 'This email is already registered on our list!',
      queueNumber: 'Your VIP Queue Number:',
      ctaButton: 'Join Waiting List Now',
    },
    faq: {
      sectionTitle: 'Frequently Asked Questions',
      sectionSubtitle: 'Everything you need to know about Obyo Trade rules, launch, and systems',
      items: [
        {
          q: 'What is Obyo Trade and how does it work?',
          a: 'Obyo Trade is an ultra-fast binary options trading environment where users predict if the price of selected assets (cryptocurrency, forex, or commodities) will close higher or lower over a specified time horizon.'
        },
        {
          q: 'When is the official start of live trading?',
          a: 'Our platforms go legally live on July 15, 2026, at 12:00 PM GMT+3. Users can register their actual funding accounts immediately when the countdown hits zero.'
        },
        {
          q: 'Is Obyo Trade secure and regulated?',
          a: 'We leverage enterprise-grade security structures, high-end server firewalls, and separate custodian bank integrations. Official broker licenses and reference certifications will be fully updated on the main footer on launch day.'
        },
        {
          q: 'What payment and payout networks are supported?',
          a: 'Traders can perform immediate deposits or withdrawals using Visa/Mastercard direct gateways, automated bank wires, or popular crypto protocols like USDT (TRC20/ERC20) and BTC. Payouts have zero processing delays.'
        },
        {
          q: 'What are the main benefits of early registration?',
          a: 'Pre-launch signups receive VIP privilege flags: a double-match bonus on their initial deposit, access to a zero-fee spread group, and lifetime free priority client support.'
        }
      ]
    },
    footer: {
      riskWarningTitle: 'CRITICAL RISK WARNING',
      riskWarningText: 'Binary options instruments involve substantial financial risk because predictions remain highly speculative. You should never trade using capital that you cannot afford to lose. Obyo Trade does not collect real investments, process subscriptions, or host capital trading prior to our official July 15, 2026 deployment. All modules on this coming-soon landing page are concepts for demonstration only.',
      allRightsReserved: 'Obyo Trade Financial Technologies © 2026. All Rights Reserved.',
      tradeSecures: 'Enterprise Ingress Safety • SSL Shield Security • Cold Storage Vault Custody'
    }
  }
};
