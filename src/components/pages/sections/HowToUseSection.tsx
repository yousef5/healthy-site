"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import OmitRTL from "@/components/OmmitRlt";
import CopyableCode from "@/components/CopyableCode";

interface HowToUseSectionProps {
  isRTL: boolean;
}

export default function HowToUseSection({ isRTL }: HowToUseSectionProps) {
  const t = useTranslations("Index");

  return (
    <section className="w-full py-12">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          {t("howToUse")}
        </h2>
        <Tabs
          defaultValue="install"
          className="max-w-3xl mx-auto"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="install"
              className="hover:bg-secondary transition-colors duration-200"
            >
              {t("installation")}
            </TabsTrigger>
            <TabsTrigger
              value="omitrtl"
              className="hover:bg-secondary transition-colors duration-200"
            >
              {t("omitrtlUsage")}
            </TabsTrigger>
            <TabsTrigger
              value="contribute"
              className="hover:bg-secondary transition-colors duration-200"
            >
              {t("contribute")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="install">
            <Card>
              <CardHeader>
                <CardTitle>{t("gettingStarted")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <p>{t("installationSteps.cloneRepository")}</p>
                    <OmitRTL>
                      <CopyableCode>
                        git clone
                        https://github.com/S0vers/i18n-Nextjs-BoilerPlate.git
                      </CopyableCode>
                    </OmitRTL>
                  </div>

                  <div className="space-y-4">
                    <p> {t("installationSteps.installDependencies")}</p>
                    <OmitRTL>
                      <CopyableCode>npm install</CopyableCode>
                    </OmitRTL>
                  </div>
                  <div className="space-y-4">
                    <p> {t("installationSteps.startDevServer")}</p>
                    <OmitRTL omitRTL={true}>
                      <CopyableCode>npm run dev</CopyableCode>
                    </OmitRTL>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="omitrtl">
            <Card>
              <CardHeader>
                <CardTitle>{t("omitrtlUsage")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{t("OmitRTLInstruction")}</p>
                <OmitRTL>
                  <CopyableCode>
                    {`import OmitRTL from './OmitRTL';

function MyComponent() {
  return (
    <div>
      <p>This text will follow the website's direction.</p>
      <OmitRTL omitRTL={true}>
        <img src="/logo.png" alt="Logo" />
        <div>
          <h2>This heading and content will always be LTR</h2>
          <p>Regardless of the website's direction.</p>
        </div>
      </OmitRTL>
    </div>
  );
}`}
                  </CopyableCode>
                </OmitRTL>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contribute">
            <Card>
              <CardHeader>
                <CardTitle>{t("howToContribute")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <p>{t("contributeSteps.fork")}</p>
                  </div>
                  <div className="space-y-4">
                    <p> {t("contributeSteps.createBranch")}</p>
                    <OmitRTL>
                      <CopyableCode>
                        git checkout -b feature/your-feature
                      </CopyableCode>
                    </OmitRTL>
                  </div>
                  <div className="space-y-4">
                    <p> {t("contributeSteps.commit")}</p>
                    <OmitRTL>
                      <CopyableCode>
                        git commit -am &apos;Add some feature&apos;
                      </CopyableCode>
                    </OmitRTL>
                  </div>
                  <div className="space-y-4">
                    <p> {t("contributeSteps.push")}</p>
                    <OmitRTL>
                      <CopyableCode>
                        git push origin feature/your-feature
                      </CopyableCode>
                    </OmitRTL>
                  </div>
                  <div className="space-y-4">
                    <p>{t("contributeSteps.pullRequest")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
