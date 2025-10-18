import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    menu: '',
    dietary: '',
    attending: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили ваше подтверждение",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/7713d82a-2a02-48c9-a6e7-ffa2bcc05899/files/051b6052-391d-43cb-b746-cc5780e4e791.jpg)' }}
      />

      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <div className="inline-block mb-8">
            <Icon name="Heart" className="text-primary animate-float" size={48} />
          </div>
          <h1 className="font-heading text-7xl md:text-9xl font-light text-foreground mb-4 tracking-wide">
            Никита <span className="text-primary">&</span> Александра
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 animate-shimmer bg-[length:200%_100%]" />
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-2">
            Приглашают вас разделить с ними
          </p>
          <p className="font-body text-2xl md:text-3xl text-foreground font-medium">
            День их свадьбы
          </p>
          <p className="font-heading text-5xl md:text-6xl text-primary mt-8 font-light">
            2 августа 2026
          </p>
        </div>
      </section>

      <section id="story" className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl text-center mb-16 text-foreground font-light">
            История любви
          </h2>
          <div className="space-y-16">
            {[
              { year: '2019', title: 'Первая встреча', text: 'Наши пути пересеклись холодным октябрьским вечером в уютной кофейне. Один взгляд изменил всё.' },
              { year: '2021', title: 'Первое путешествие', text: 'Вместе мы открыли для себя Италию. Венеция стала символом нашей любви.' },
              { year: '2023', title: 'Предложение', text: 'На берегу моря, под звёздным небом, прозвучал самый важный вопрос.' },
              { year: '2026', title: 'Свадьба', text: 'И вот мы здесь, готовые начать новую главу нашей истории вместе с вами.' }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg bg-card/80 backdrop-blur-sm animate-fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
                        <span className="font-heading text-2xl text-primary font-semibold">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-3xl mb-3 text-foreground font-medium">{item.title}</h3>
                      <p className="font-body text-lg text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="relative py-24 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl text-center mb-16 text-foreground font-light">
            Программа торжества
          </h2>
          <div className="space-y-6">
            {[
              { time: '15:00', icon: 'Church', title: 'Церемония', desc: 'Торжественная регистрация брака' },
              { time: '16:30', icon: 'Camera', title: 'Фотосессия', desc: 'Совместные фотографии с гостями' },
              { time: '17:00', icon: 'Utensils', title: 'Банкет', desc: 'Праздничный ужин' },
              { time: '19:00', icon: 'Music', title: 'Первый танец', desc: 'Танец молодожёнов' },
              { time: '20:00', icon: 'PartyPopper', title: 'Развлечения', desc: 'Танцы, игры и веселье' },
              { time: '23:00', icon: 'Sparkles', title: 'Салют', desc: 'Фейерверк в честь молодых' }
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-primary shadow-md bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="font-heading text-3xl text-primary font-semibold">{item.time}</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={item.icon} className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-body text-xl font-semibold mb-1 text-foreground">{item.title}</h3>
                      <p className="font-body text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="venue" className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl text-center mb-16 text-foreground font-light">
            Место проведения
          </h2>
          <Card className="overflow-hidden shadow-xl border-none">
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/7713d82a-2a02-48c9-a6e7-ffa2bcc05899/files/787a728d-a20c-487b-9d7e-af37047a9af4.jpg)' }}
            />
            <CardContent className="p-8 bg-card/95 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-heading text-3xl mb-3 text-foreground font-medium">ЦЭТ Берхино</h3>
                  <p className="font-body text-lg text-muted-foreground mb-4">
                    Московская область, г. о. Луховицы, д. Берхино, ул. Осетровая, д. 1
                  </p>
                  <div className="space-y-2 font-body text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Car" size={20} className="text-primary" />
                      <span>40 минут от МКАД</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ParkingCircle" size={20} className="text-primary" />
                      <span>Бесплатная парковка для гостей</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-lg h-12">
                <Icon name="Navigation" className="mr-2" size={20} />
                Построить маршрут
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rsvp" className="relative py-24 px-4 bg-gradient-to-b from-secondary/10 to-accent/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl text-center mb-8 text-foreground font-light">
            Подтверждение присутствия
          </h2>
          <p className="text-center font-body text-lg text-muted-foreground mb-12">
            Пожалуйста, подтвердите своё присутствие до 1 июля 2026
          </p>
          <Card className="shadow-2xl border-none">
            <CardContent className="p-8 bg-card/95 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-body text-base mb-2 block">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="font-body h-12"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div>
                  <Label className="font-body text-base mb-3 block">Вы будете присутствовать?</Label>
                  <RadioGroup
                    value={formData.attending}
                    onValueChange={(value) => setFormData({ ...formData, attending: value })}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-body cursor-pointer">Да, с удовольствием!</Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-body cursor-pointer">К сожалению, не смогу</Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attending === 'yes' && (
                  <>
                    <div>
                      <Label htmlFor="guests" className="font-body text-base mb-2 block">Количество гостей</Label>
                      <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                        <SelectTrigger className="font-body h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map(num => (
                            <SelectItem key={num} value={String(num)} className="font-body">
                              {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="menu" className="font-body text-base mb-2 block">Предпочтения по меню</Label>
                      <Select value={formData.menu} onValueChange={(value) => setFormData({ ...formData, menu: value })}>
                        <SelectTrigger className="font-body h-12">
                          <SelectValue placeholder="Выберите вариант" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="meat" className="font-body">Мясное меню</SelectItem>
                          <SelectItem value="fish" className="font-body">Рыбное меню</SelectItem>
                          <SelectItem value="vegetarian" className="font-body">Вегетарианское меню</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="dietary" className="font-body text-base mb-2 block">Особые пожелания</Label>
                      <Textarea
                        id="dietary"
                        value={formData.dietary}
                        onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                        className="font-body min-h-24"
                        placeholder="Аллергии, диетические ограничения..."
                      />
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body text-lg h-12">
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="dresscode" className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl md:text-6xl text-center mb-16 text-foreground font-light">
            Дресс-код
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-none bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center border-2 border-blue-400/30">
                    <Icon name="User" className="text-blue-600" size={40} />
                  </div>
                  <h3 className="font-heading text-3xl text-foreground font-medium">Для него</h3>
                </div>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span>Классический костюм тёмных оттенков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span>Галстук или бабочка приветствуются</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span>Классическая обувь</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400/20 to-pink-600/20 flex items-center justify-center border-2 border-pink-400/30">
                    <Icon name="UserRound" className="text-pink-600" size={40} />
                  </div>
                  <h3 className="font-heading text-3xl text-foreground font-medium">Для неё</h3>
                </div>
                <ul className="space-y-3 font-body text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span>Вечернее платье пастельных тонов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span>Избегайте белого и чёрного цветов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                    <span>Удобная обувь для танцев</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="relative py-24 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-6xl mb-12 text-foreground font-light">
            Контакты
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12">
            По всем вопросам обращайтесь к организаторам
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="shadow-lg border-none bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading text-2xl mb-2 text-foreground">Мария</h3>
                <p className="font-body text-muted-foreground mb-1">Подруга невесты</p>
                <a href="tel:+79161234567" className="font-body text-primary hover:underline">
                  +7 (916) 123-45-67
                </a>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-none bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-heading text-2xl mb-2 text-foreground">Дмитрий</h3>
                <p className="font-body text-muted-foreground mb-1">Друг жениха</p>
                <a href="tel:+79161234568" className="font-body text-primary hover:underline">
                  +7 (916) 123-45-68
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-4 text-center">
        <div className="inline-block mb-6">
          <Icon name="Heart" className="text-primary" size={32} />
        </div>
        <p className="font-heading text-2xl text-foreground mb-2">
          Никита & Александра
        </p>
        <p className="font-body text-muted-foreground">
          2 августа 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;