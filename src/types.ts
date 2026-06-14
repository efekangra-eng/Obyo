/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'TR' | 'EN';

export interface TranslationSchema {
  nav: {
    comingSoon: string;
    whitepaper: string;
    interactiveDemo: string;
    register: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    titleSecond: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    activeUsersBadge: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    remainingTime: string;
    readyAlert: string;
  };
  simulator: {
    title: string;
    subtitle: string;
    assetLabel: string;
    balanceLabel: string;
    amountLabel: string;
    returnRate: string;
    estPayout: string;
    callBtn: string;
    putBtn: string;
    placeTrade: string;
    waitingResult: string;
    winMessage: string;
    lossMessage: string;
    tryAgain: string;
    activeDemoHint: string;
    totalWins: string;
    totalLosses: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    lightningTitle: string;
    lightningDesc: string;
    payoutTitle: string;
    payoutDesc: string;
    secureTitle: string;
    secureDesc: string;
    responsiveTitle: string;
    responsiveDesc: string;
  };
  register: {
    title: string;
    subtitle: string;
    placeholderEmail: string;
    placeholderName: string;
    roleLabel: string;
    roleRetail: string;
    roleVip: string;
    rolePartner: string;
    invalidEmailErr: string;
    requiredErr: string;
    successMessage: string;
    registeredBefore: string;
    queueNumber: string;
    ctaButton: string;
  };
  faq: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  footer: {
    riskWarningTitle: string;
    riskWarningText: string;
    allRightsReserved: string;
    tradeSecures: string;
  };
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface UserSubscription {
  name: string;
  email: string;
  role: string;
  queueNum: number;
}
