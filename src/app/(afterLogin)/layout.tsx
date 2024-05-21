export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      애프터로그인 레이아웃
      {children}
    </section>
  );
}
