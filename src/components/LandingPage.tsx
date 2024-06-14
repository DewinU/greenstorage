/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WwXEgTCwuqt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UploadIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">GreenStorage</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            File Upload
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Carbon Footprint
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 ">Manage Your Files & Carbon Footprint</h1>
            <p className="text-gray-700 ">
              Upload your files and track your carbon footprint with our comprehensive platform.
            </p>
            <div className="flex gap-4">
              <Button>Upload Files</Button>
              <Button variant="outline">Calculate Footprint</Button>
            </div>
          </div>
          <div>
            <img src="/images/piecito.webp" alt="File Upload & Carbon Footprint" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </main>
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <UploadIcon className="w-8 h-8" />
            <h3 className="text-xl font-semibold">File Upload</h3>
            <p className="text-gray-400">Easily upload and manage your files in our secure platform.</p>
          </div>
          <div className="space-y-2">
            <TrendingUpIcon className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Carbon Footprint</h3>
            <p className="text-gray-400">Track your carbon footprint based on the files you have uploaded.</p>
          </div>
          <div className="space-y-2">
            <RecycleIcon className="w-8 h-8" />
            <h3 className="text-xl font-semibold">Sustainable Practices</h3>
            <p className="text-gray-400">Promote environmentally friendly practices with our digital solutions.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img src="/placeholder.svg" alt="File Upload" className="w-full h-auto rounded-lg" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 ">Effortless File Uploads</h2>
            <p className="text-gray-700 ">
              Our platform provides a seamless file upload experience, allowing you to manage your documents with ease.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Drag and drop file uploads</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Secure file storage and sharing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Detailed file management tools</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Track Your Carbon Footprint</h2>
            <p className="text-gray-400">
              Our platform calculates your carbon footprint based on the files you have uploaded, helping you make
              informed decisions to reduce your environmental impact.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Detailed carbon footprint analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Personalized recommendations for improvement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-green-500" />
                <span>Tracking and reporting tools</span>
              </li>
            </ul>
          </div>
          <div>
            <img src="/placeholder.svg" alt="Carbon Footprint Tracking" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-6">
          <div className="container px-4 md:px-6 space-y-12 mx-auto">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Centralize and Optimize Your File Uploads
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Easily upload files, track your carbon footprint, and manage your data all in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <UploadIcon className="h-8 w-8 text-gray-900 " />
                <h3 className="text-lg font-bold">File Uploads</h3>
                <p className="text-sm text-gray-500">
                  Securely upload and manage your files in one central location.
                </p>
              </div>
              <div className="grid gap-1">
                <CogIcon className="h-8 w-8 text-gray-900" />
                <h3 className="text-lg font-bold">Carbon Footprint Tracking</h3>
                <p className="text-sm text-gray-500">
                  Understand the environmental impact of your file storage and reduce your carbon footprint.
                </p>
              </div>
              <div className="grid gap-1">
                <CommandIcon className="h-8 w-8 text-gray-900" />
                <h3 className="text-lg font-bold">Centralized File Management</h3>
                <p className="text-sm text-gray-500">
                  Manage all your files in one place, with easy access and organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      <footer className="bg-gray-900 text-white py-6 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UploadIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">GreenStorage</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function RecycleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}


function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}


function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

function CogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function CommandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  )
}