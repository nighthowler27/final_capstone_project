import CenteredLayout from '@/components/CenterLayout';

import TypewriterEffect from '@/components/TypewriterEffect';

export default function Home() {
    
  return (
    <CenteredLayout>
    <main>
        <div>
            <h1>Hi!, I'm <b>Stephen</b>.</h1>
        </div>
        <div>
            <h2>I am a 
                <strong>
                    <TypewriterEffect />
                </strong>. 
            </h2>
        </div>
        <div>
            <h3>Want to know more about me? Click the icons below!</h3>
        </div>
    </main>
    </CenteredLayout>
  )
}
