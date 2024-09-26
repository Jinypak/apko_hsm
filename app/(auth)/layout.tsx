import '../globals.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="container bg-slate-200">{children}</body>
    </html>
  );
}
