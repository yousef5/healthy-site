import { Metadata } from "next";
import PricesProductPage from "./PricesProductPage";

const SITE_URL = "https://healthy-eg.com";

type ProductSEO = {
  path: string;
  nameAr: string;
  nameEn: string;
  price: number;
  descriptionAr: string;
  descriptionEn: string;
  keywords: string;
};

const productsSEO: ProductSEO[] = [
  {
    path: "germeten10ml",
    nameAr: "جيرميتين 10 مل نقط",
    nameEn: "Germitin 10ml Drops",
    price: 57,
    descriptionAr: "جيرميتين نقط 10 مل من هلثي كيور HealthyCure - فيتامين للأطفال والرضع - سعر جيرميتين في مصر",
    descriptionEn: "Germitin 10ml Drops by HealthyCure - Vitamin drops for babies and children - Germitin price in Egypt",
    keywords: "جيرميتين, Germitin, germitin drops, نقط جيرميتين, فيتامين للأطفال, HealthyCure, هلثي كيور",
  },
  {
    path: "omepure10ml",
    nameAr: "أوميبيور 10 مل نقط",
    nameEn: "Omepure 10ml Drops",
    price: 75,
    descriptionAr: "أوميبيور نقط 10 مل من هلثي كيور HealthyCure - أوميغا 3 للأطفال والرضع - سعر أوميبيور في مصر",
    descriptionEn: "Omepure 10ml Drops by HealthyCure - Omega-3 drops for babies and children - Omepure price in Egypt",
    keywords: "أوميبيور, Omepure, omepure drops, نقط أوميبيور, أوميغا 3, omega-3, HealthyCure, هلثي كيور",
  },
  {
    path: "alphadrink12",
    nameAr: "الفادرينك 12 كيس",
    nameEn: "AlfaDrink 12 Sachets",
    price: 27,
    descriptionAr: "الفادرينك 12 كيس من هلثي كيور HealthyCure - مكمل غذائي للطاقة - سعر الفادرينك في مصر",
    descriptionEn: "AlfaDrink 12 Sachets by HealthyCure - Energy supplement - AlfaDrink price in Egypt",
    keywords: "الفادرينك, AlfaDrink, alfadrink sachets, أكياس الفادرينك, مكمل غذائي, HealthyCure, هلثي كيور",
  },
  {
    path: "choclocal15",
    nameAr: "شكلوكال 15 كيس",
    nameEn: "Choclocal 15 Sachets",
    price: 49,
    descriptionAr: "شكلوكال 15 كيس من هلثي كيور HealthyCure - مكمل غذائي بالشوكولاتة - سعر شكلوكال في مصر",
    descriptionEn: "Choclocal 15 Sachets by HealthyCure - Chocolate supplement - Choclocal price in Egypt",
    keywords: "شكلوكال, Choclocal, choclocal sachets, أكياس شكلوكال, مكمل شوكولاتة, HealthyCure, هلثي كيور",
  },
  {
    path: "alphamore15",
    nameAr: "الفامور 15 كيس",
    nameEn: "AlfaMore 15 Sachets",
    price: 89,
    descriptionAr: "الفامور 15 كيس من هلثي كيور HealthyCure - مكمل غذائي متكامل - سعر الفامور في مصر",
    descriptionEn: "AlfaMore 15 Sachets by HealthyCure - Complete supplement - AlfaMore price in Egypt",
    keywords: "الفامور, AlfaMore, alfamore sachets, أكياس الفامور, مكمل غذائي, HealthyCure, هلثي كيور",
  },
  {
    path: "irovit15",
    nameAr: "ايروفيت 15 كيس",
    nameEn: "Irovit 15 Sachets",
    price: 49,
    descriptionAr: "ايروفيت 15 كيس من هلثي كيور HealthyCure - مكمل حديد وفيتامينات - سعر ايروفيت في مصر",
    descriptionEn: "Irovit 15 Sachets by HealthyCure - Iron and vitamins supplement - Irovit price in Egypt",
    keywords: "ايروفيت, Irovit, irovit sachets, أكياس ايروفيت, مكمل حديد, HealthyCure, هلثي كيور",
  },
  {
    path: "alphafresh15",
    nameAr: "الفافريش 15 كيس",
    nameEn: "AlfaFresh 15 Sachets",
    price: 40,
    descriptionAr: "الفافريش 15 كيس من هلثي كيور HealthyCure - مكمل غذائي منعش - سعر الفافريش في مصر",
    descriptionEn: "AlfaFresh 15 Sachets by HealthyCure - Fresh supplement - AlfaFresh price in Egypt",
    keywords: "الفافريش, AlfaFresh, alfafresh sachets, أكياس الفافريش, مكمل غذائي, HealthyCure, هلثي كيور",
  },
  {
    path: "jaufree10ml",
    nameAr: "جوفري 10 مل نقط",
    nameEn: "Jaufree 10ml Drops",
    price: 77,
    descriptionAr: "جوفري نقط 10 مل من هلثي كيور HealthyCure - مكمل غذائي للأطفال والرضع - سعر جوفري في مصر",
    descriptionEn: "Jaufree 10ml Drops by HealthyCure - Nutritional supplement for babies and children - Jaufree price in Egypt",
    keywords: "جوفري, Jaufree, jaufree drops, نقط جوفري, مكمل غذائي للأطفال, HealthyCure, هلثي كيور",
  },
];

const productPaths = productsSEO.map((p) => p.path);
const locales = ["ar", "en"];

export function generateStaticParams() {
  const params: { locale: string; productId: string }[] = [];
  for (const locale of locales) {
    for (const productId of productPaths) {
      params.push({ locale, productId });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; productId: string }>;
}): Promise<Metadata> {
  const { locale, productId } = await params;
  const product = productsSEO.find((p) => p.path.toLowerCase() === productId.toLowerCase());
  const isArabic = locale === "ar";

  if (!product) {
    return {
      title: isArabic ? "منتج غير موجود" : "Product Not Found",
    };
  }

  const title = isArabic
    ? `${product.nameAr} - سعر ${product.price} جنيه | هلثي كيور`
    : `${product.nameEn} - ${product.price} EGP | HealthyCure`;

  const description = isArabic ? product.descriptionAr : product.descriptionEn;

  return {
    title,
    description,
    keywords: product.keywords,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/prices/${product.path}`,
      siteName: "Healthy Pharma - HealthyCure",
      images: [
        {
          url: `${SITE_URL}/products/main/${product.path.replace(/\d+ml|\d+/, "")}.png`,
          width: 600,
          height: 800,
          alt: isArabic ? product.nameAr : product.nameEn,
        },
      ],
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/prices/${product.path}`,
    },
  };
}

export default function Page() {
  return <PricesProductPage />;
}
