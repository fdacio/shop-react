import "./globals.css";
import Header from "@/components/header"
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Shop",
  description: "Sistema de loja virtual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Header />
        </header>
        <main>

            <Sidebar />
            <section className="content">
              {children}
            </section>

        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
