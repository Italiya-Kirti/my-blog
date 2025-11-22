import Header from "@/components/elements/Header"

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {

  return (
    <div className={"relative h-screen overflow-hidden flex flex-col"}>
      <Header />
      {children}
    </div>
  )
}

export default DashboardLayout
