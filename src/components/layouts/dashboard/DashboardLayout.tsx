import Footer from "@/components/elements/Footer"
import Header from "@/components/elements/Header"

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DashboardLayout
