import './App.css'
import { useState } from 'react'
import { Menu, X, MapPin, Calendar, Clock, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import GoogleMap from './components/GoogleMap'

// Import images
import logoImage from './assets/LINE_ALBUM_古城祭_250707_1.jpg'
import canvasImage from './assets/S__14131219.jpg'
import backgroundImage from './assets/background_abstract_canvas.png'
import paintBrushIcon from './assets/icon_paint_brush.png'
import paletteIcon from './assets/icon_palette.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoImage} alt="古城祭ロゴ" className="h-12 w-12 rounded-full object-cover" />
              <span className="ml-3 text-xl font-bold text-gray-800">古城祭 2025</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">ホーム</a>
                <a href="#events" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">イベント詳細</a>
                <a href="#access" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">アクセス</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">お問い合わせ</a>
                <a href="#sns" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">SNS</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">ホーム</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">イベント詳細</a>
              <a href="#access" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">アクセス</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">お問い合わせ</a>
              <a href="#sns" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">SNS</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <img src={logoImage} alt="古城祭ロゴ" className="mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-2xl" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              古城祭（ふるじょうさい）
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 mb-6">
              Canvas ~夢を描く、未来をつくる~
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-orange-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">前夜祭：11月22日（土）</p>
                    <p className="text-gray-600">12:00〜17:30</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-orange-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">本祭：11月23日（日）</p>
                    <p className="text-gray-600">12:00〜20:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-green-500 mr-3" />
                <p className="text-gray-800 font-medium">宮崎産業経営大学 第一駐車場</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              「Canvas ~夢を描く、未来をつくる~」をテーマに、宮崎産業経営大学で開催される古城祭。<br />
              学生たちの創造性と情熱が織りなす、色とりどりの祭典にぜひお越しください。
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-3 text-lg">
              イベント詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">イベントハイライト</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              古城祭は、学生と地域の皆様が一緒に楽しめる特別なイベントです。キャンバスに絵を描くように、一人ひとりの想いが集まって素晴らしい祭りを創り上げます。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={canvasImage} alt="Canvas テーマイメージ" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <img src={paintBrushIcon} alt="ペイントブラシ" className="w-8 h-8 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">創造性あふれる企画</h3>
                  <p className="text-gray-600">縁日、謎解き、カラオケなど、多彩な企画をご用意しています。</p>
                </div>
              </div>
              <div className="flex items-start">
                <img src={paletteIcon} alt="パレット" className="w-8 h-8 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">美味しい食べ物</h3>
                  <p className="text-gray-600">学生による模擬店と地域のキッチンカーが多数出店予定です。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 mr-4 mt-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">新しい出会い</h3>
                  <p className="text-gray-600">地域の皆様と学生が交流できる絶好の機会です。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">イベント詳細</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">模擬店</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  学生たちが心を込めて準備した様々な模擬店が出店予定です。地元の味から創作料理まで、多彩なメニューをお楽しみいただけます。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">キッチンカー</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  地域で人気のキッチンカーも多数出店予定です。プロの味をお手軽に楽しめる絶好の機会です。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">縁日</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  懐かしい縁日の雰囲気を再現します。射的、ヨーヨー釣り、輪投げなど、子どもから大人まで楽しめる伝統的な遊びをご用意しています。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">謎解き</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  キャンパス内を巡る謎解きゲームを開催します。仲間と協力して謎を解き明かし、ゴールを目指しましょう。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-pink-600">カラオケ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  みんなで歌って盛り上がろう！カラオケ大会を開催します。自慢の歌声を披露して、会場を盛り上げてください。
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">ゲスト</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  特別ゲストの出演も予定しています。詳細が決定次第、こちらでお知らせいたします。お楽しみに！
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">アクセス</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">会場案内</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">宮崎産業経営大学 第一駐車場</p>
                      <p className="text-gray-600">〒880-8550 宮崎県宮崎市古城町丸尾100番地</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">交通アクセス</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">公共交通機関をご利用の場合</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• JR宮崎駅からバスで約20分</li>
                      <li>• 宮崎交通バス「産業経営大学前」下車、徒歩3分</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">お車でお越しの場合</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 宮崎自動車道「宮崎IC」から約15分</li>
                      <li>• 駐車場：第2駐車場をご利用ください（無料）</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">駐車場案内</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    イベント当日は第2駐車場をご利用ください。第一駐車場はイベント会場となっているため、ご利用いただけません。第2駐車場から会場までは徒歩約5分です。
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>注意：</strong> 満車の場合は近隣の有料駐車場をご利用ください。
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Map */}
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">一般的なお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span>kojosai@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-3" />
                  <span>0985-XXX-XXXX（平日9:00-17:00）</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">よくある質問（FAQ）</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Q: 入場料はかかりますか？</h4>
                  <p className="text-gray-600 text-sm">A: 入場は無料です。どなたでもお気軽にお越しください。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Q: 雨天の場合はどうなりますか？</h4>
                  <p className="text-gray-600 text-sm">A: 小雨の場合は決行いたします。荒天の場合は中止または延期となる可能性があります。</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Q: ペットの同伴はできますか？</h4>
                  <p className="text-gray-600 text-sm">A: はい、可能です。ただし、リードの着用、排泄物の適切な処理、他のお客様へのご配慮をお願いいたします。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SNS Section */}
      <section id="sns" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">SNS</h2>
            <p className="text-lg text-gray-600">
              古城祭の最新情報は各SNSでも発信しています。ぜひフォローして、最新情報をチェックしてください！
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <a href="https://twitter.com/Msu_gakuyukai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-blue-500 p-4 rounded-full group-hover:bg-blue-600 transition-colors">
                <Twitter className="h-8 w-8 text-white" />
              </div>
              <span className="mt-2 text-gray-700">X (旧Twitter)</span>
            </a>
            <a href="https://www.instagram.com/sankei_gakuyukai/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="bg-pink-500 p-4 rounded-full group-hover:bg-pink-600 transition-colors">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <span className="mt-2 text-gray-700">Instagram</span>
            </a>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              ハッシュタグ：<span className="text-blue-600 font-semibold">#古城祭 #Canvas #宮崎産業経営大学 #学園祭</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={logoImage} alt="古城祭ロゴ" className="mx-auto mb-4 w-16 h-16 rounded-full object-cover" />
            <h3 className="text-xl font-bold mb-2">古城祭（ふるじょうさい） 2025</h3>
            <p className="text-gray-400 mb-4">Canvas ~夢を描く、未来をつくる~</p>
            <p className="text-gray-400 text-sm">
              © 2025 宮崎産業経営大学 古城祭実行委員会. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

