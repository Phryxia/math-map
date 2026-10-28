# Bihari 부등식

# 개요

**Bihari 부등식(Bihari's inequality)** 은 함수가 상수와 자기 자신의 비선형 함수의 적분의 합으로 위에서 눌리면, 대응하는 미분방정식의 해로 위에서 눌린다는 부등식이다. 같은 초깃값에서 출발한 두 해의 차이 $u$ 가 $u(t)\le\int_0^t u(s)\log(1/u(s))\thinspace ds$ 만 만족할 때는 차이가 $0$ 인지 [Grönwall 부등식](gronwall-inequality.md)으로 판정할 수 없다. 이 부등식은 피적분함수의 $u$ 를 비감소 함수 $w(u)$ 로 바꾼 상한을 주어, 그런 경우에도 두 해가 같음을 보인다.

# 직관

Bihari 부등식에서 $w(u)=u$ 로 두면 Grönwall 부등식이 된다. 우변이 Lipschitz 조건을 만족하지 않는 미분방정식에서 해의 유일성을 보이는 Osgood 판정법이 이 부등식으로 증명된다.

방정식 $x'=f(x)$ 에서 $f$ 가 작은 $r\gt 0$ 에 대해 $\vert f(x)-f(y)\vert\le w(\vert x-y\vert)$, $w(r)=r\log(1/r)$ 을 만족한다고 하자. $w(r)/r=\log(1/r)$ 은 $r\to 0$ 에서 한없이 커지므로 이 $f$ 는 Lipschitz 조건을 만족하지 않을 수 있다. 같은 초깃값에서 출발한 두 해가 같은지 알고 싶다.

두 해의 차이 $u(t)=\vert x(t)-y(t)\vert$ 는 $u(t)\le\int_0^t w(u(s))\thinspace ds$ 를 만족한다. Grönwall 부등식은 피적분함수가 $u$ 의 상수배일 때만 쓸 수 있어 여기서는 쓸 수 없다.

Grönwall 부등식의 증명처럼 우변에 작은 양 $\varepsilon$ 을 더한 $v(t)=\varepsilon+\int_0^t w(u(s))\thinspace ds$ 를 본다. $w$ 가 작은 $r$ 에서 증가하므로 $v'=w(u)\le w(v)$ 이고, $v'/w(v)\le 1$ 이다. $G(r)=\int_{r}^{1/e}ds/w(s)=\log\log(1/r)$ 로 두면 $G$ 는 감소하고 $\frac{d}{dt}G(v(t))=-v'/w(v)\ge -1$ 이므로

$$
\log\log\frac1{v(t)}\ge\log\log\frac1\varepsilon-t
$$

이다. $\varepsilon\to 0$ 이면 우변이 $\infty$ 로 가므로 $v(t)\to 0$ 이고, $u(t)\le v(t)$ 이므로 $u(t)=0$ 이다. 두 해는 같다. 우변이 $\infty$ 로 간 것은 $\int_0 ds/w(s)=\infty$ 와 같은 말이다.

# 정의

$u$ 와 $\beta\ge 0$ 이 $[t_0,T]$ 에서 연속이고 $u\ge 0$ 이다. $w:[0,\infty)\to[0,\infty)$ 가 연속이고 감소하지 않으며 $r\gt 0$ 에서 $w(r)\gt 0$ 이다. 고정한 $r_0\gt 0$ 에 대해

$$
G(r)=\int_{r_0}^{r}\frac{ds}{w(s)}\qquad(r\gt 0)
$$

로 둔다.

**Bihari 부등식.** 상수 $\alpha\gt 0$ 에 대해 모든 $t\in[t_0,T]$ 에서

$$
u(t)\le\alpha+\int_{t_0}^{t}\beta(s)\thinspace w\bigl(u(s)\bigr)\thinspace ds
$$

이면, $G(\alpha)+\int_{t_0}^{t}\beta(s)\thinspace ds$ 가 $G$ 의 치역 안에 있는 모든 $t$ 에서

$$
u(t)\le G^{-1}\Bigl(G(\alpha)+\int_{t_0}^{t}\beta(s)\thinspace ds\Bigr)
$$

이다.[^1] Bihari 가 1956 년에 이 꼴로 증명했고, LaSalle 의 1949 년 결과와 함께 **Bihari–LaSalle 부등식(Bihari–LaSalle inequality)** 이라고도 부른다.

# 성질

## 증명의 요지

$v(t)=\alpha+\int_{t_0}^{t}\beta(s)w(u(s))\thinspace ds$ 로 두면 $u\le v$ 이고 $w$ 가 감소하지 않으므로 $v'=\beta w(u)\le\beta w(v)$ 다. $v\ge\alpha\gt 0$ 이므로 $w(v)\gt 0$ 이고 $\frac{d}{dt}G(v(t))=v'/w(v)\le\beta$ 다. 적분하면 $G(v(t))\le G(\alpha)+\int_{t_0}^{t}\beta$ 이고, $G$ 가 증가하므로 $u\le v\le G^{-1}(\cdots)$ 이다.

## Grönwall 부등식과의 관계

$w(u)=u$, $r_0=1$ 이면 $G(r)=\log r$ 이고 $G^{-1}(s)=e^s$ 이므로 결론은 $u(t)\le\alpha\exp\bigl(\int_{t_0}^{t}\beta\bigr)$ 이다. Grönwall 부등식의 적분형과 같다.

## 유한 시간 발산

$\int^\infty ds/w(s)\lt\infty$ 이면 $G$ 의 치역이 위로 유계이고, 결론은 $\int_{t_0}^{t}\beta$ 가 $G(\infty)-G(\alpha)$ 보다 작은 $t$ 에서만 성립한다. $w(u)=u^2$, $\beta=1$ 이면 결론은 $u(t)\le\alpha/(1-\alpha(t-t_0))$ 이고, 이것은 $x'=x^2$, $x(t_0)=\alpha$ 의 해다. 이 해가 $t=t_0+1/\alpha$ 에서 발산하므로 상한도 그 뒤로는 정해지지 않는다.

# 활용

- **Osgood 판정법.** $\vert f(t,x)-f(t,y)\vert\le w(\vert x-y\vert)$ 이고 $\int_0^1 ds/w(s)=\infty$ 이면 초깃값 문제의 해는 유일하다. 두 해의 차이에 Bihari 부등식을 $\alpha=\varepsilon$ 으로 쓰고 $\varepsilon\to 0$ 으로 보내면 $G(\varepsilon)\to-\infty$ 이므로 차이가 $0$ 이다. 직관 절의 계산이 이 경우다.[^2] 조건을 만족하지 않는 $w(r)=3r^{2/3}$ 에서는 해가 여럿일 수 있고, 그 예가 [Peano 존재정리](peano-existence-theorem.md)에 있다.
- **해의 전역 존재.** $\vert f(t,x)\vert\le w(\vert x\vert)$ 이고 $\int^\infty ds/w(s)=\infty$ 이면 $\vert x(t)\vert$ 의 상한이 모든 시간에서 유한하므로 해가 유한 시간에 발산하지 않는다. $w(r)=r\log r$ 이 그런 예다.

[^1]: I. Bihari, *A generalization of a lemma of Bellman and its application to uniqueness problems of differential equations*, Acta Mathematica Academiae Scientiarum Hungaricae **7** (1956), 81–94. J. P. LaSalle, *Uniqueness theorems and successive approximations*, Annals of Mathematics **50** (1949), 722–730.
[^2]: W. F. Osgood, *Beweis der Existenz einer Lösung der Differentialgleichung dy/dx = f(x, y) ohne Hinzunahme der Cauchy-Lipschitz'schen Bedingung*, Monatshefte für Mathematik und Physik **9** (1898), 331–345. P. Hartman, *Ordinary Differential Equations*, 2nd ed., SIAM, 2002, 3 장 6 절.

# 연관 문서

## 선수지식

- [Grönwall 부등식](gronwall-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #theorem
