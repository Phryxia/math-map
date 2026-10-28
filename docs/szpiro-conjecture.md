# Szpiro 추측

# 개요

**Szpiro 추측(Szpiro's conjecture)** 은 [타원곡선](elliptic-curves.md)의 판별식이라는 정수가, 그 판별식을 나누는 소수들로 정해지는 더 작은 정수인 도체의 약 $6$ 제곱보다 크게 자랄 수 없다는 추측이다. $3+125=128$ 에서 만든 곡선 $y^2=x(x-3)(x+125)$ 의 판별식은 $16\cdot 48000^2$ 으로 크지만, 이를 나누는 소수는 $2,3,5$ 셋뿐이어서 도체는 이 세 소수의 작은 거듭제곱의 곱이다. Szpiro 추측은 판별식과 도체의 이 차이에 지수 $6+\varepsilon$ 의 상한을 두고, 이런 곡선에 적용하면 $c$ 가 $abc$ 의 소인수 곱에 비해 얼마나 클 수 있는지를 묻는 부등식과 같은 꼴이 된다.

# 직관

Szpiro 추측은 $\mathbb Q$ 위 타원곡선의 최소 판별식이 도체의 $6+\varepsilon$ 제곱으로 위에서 유계라는 추측이다. Szpiro 가 1980 년대 초에 제시했다.[^1]

판별식은 나쁜 환원을 갖는 소수의 지수까지 세고 도체는 그 지수를 대부분 버린다. 그래서 이 추측은 [abc 추측](abc-conjecture.md)이 $c$ 와 $\mathrm{rad}(abc)$ 사이에 두는 부등식과 같은 꼴이고, 판별식 대신 Weierstrass 방정식의 불변량을 쓰는 변형은 abc 추측과 동치다.

서로소인 $a+b=c$ 에서 곡선 $y^2=x(x-a)(x+b)$ 를 만든다. 세 근 $0,a,-b$ 의 차가 $a,b,c$ 이므로 판별식은 $16(abc)^2$ 이다. 이 곡선은 $abc$ 를 나누는 홀수 소수에서만 나쁜 환원을 갖고, 그 소수에서의 환원은 곱셈적이다.

판별식 $16(abc)^2$ 에는 $abc$ 의 소인수가 지수까지 들어 있다. 곱셈적 환원인 소수는 도체에 한 번씩만 들어가므로 도체는 $\mathrm{rad}(abc)$ 에 $2$ 의 거듭제곱을 곱한 수다. 판별식이 도체보다 얼마나 클 수 있는지 묻는 것이 $c$ 가 $\mathrm{rad}(abc)$ 보다 얼마나 클 수 있는지 묻는 것과 같아진다.

# 정의

## 도체

$E/\mathbb Q$ 의 **도체(conductor)** 는

$$
N_E=\prod_{p}p^{f_p}
$$

이다. $f_p$ 는 좋은 환원에서 $0$, 곱셈적 환원에서 $1$, 덧셈적 환원에서 $2$ 이상이고, $p\ge5$ 이면 덧셈적 환원의 $f_p$ 는 $2$ 다. $f_2\le8$, $f_3\le5$ 다.[^2] 덧셈적 환원이 없는 곡선을 반안정(semistable)이라 하고, 그때 $N_E$ 는 나쁜 환원 소수의 곱이다.

## 추측의 진술

**Szpiro 추측.** 모든 $\varepsilon\gt 0$ 에 대해 상수 $C_\varepsilon$ 이 있어 $\mathbb Q$ 위의 모든 타원곡선 $E$ 에서

$$
\vert\Delta_E\vert\le C_\varepsilon\thinspace N_E^{\thinspace6+\varepsilon}
$$

이다. $\Delta_E$ 는 최소 판별식이다. $\log\vert\Delta_E\vert/\log N_E$ 를 $E$ 의 **Szpiro 비(Szpiro ratio)** 라 한다.

**변형된 Szpiro 추측.** 최소 Weierstrass 방정식의 불변량 $c_4,c_6$ 에 대해 $\max(\vert c_4\vert^3,c_6^2)\le C_\varepsilon N_E^{\thinspace6+\varepsilon}$ 이다. $1728\Delta=c_4^3-c_6^2$ 이므로 이 판본이 원래 판본을 함의한다.

# 성질

## abc 추측과의 관계

**정리(Oesterlé).** 변형된 Szpiro 추측은 abc 추측과 동치다.[^1]

abc 추측에서 변형된 Szpiro 추측이 나오는 방향은 등식 $c_4^3-c_6^2=1728\Delta$ 에 abc 추측을 적용한다. $M=\max(\vert c_4\vert^3,c_6^2)$ 이라 하면 $\mathrm{rad}(c_4^3c_6^2\Delta)$ 는 $2,3$ 의 인수를 빼고 $\vert c_4c_6\vert N_E\ll M^{5/6}N_E$ 이하다. 공약수를 처리하면 $M\ll(M^{5/6}N_E)^{1+\varepsilon}$ 이고, 양변을 $M^{5/6}$ 으로 나누면 $M\ll N_E^{\thinspace6+\varepsilon'}$ 이다. 반대 방향은 직관 절의 곡선 $y^2=x(x-a)(x+b)$ 를 쓴다. 이 곡선에서 $c_4=16(a^2+ab+b^2)$ 이고 $\vert c_4\vert^3$ 은 $c^6$ 규모이므로 변형된 추측이 $c^6\ll\mathrm{rad}(abc)^{6+\varepsilon}$ 을 주어 abc 추측이 된다.

원래 판본을 같은 곡선에 적용하면 $(abc)^2\ll\mathrm{rad}(abc)^{6+\varepsilon}$ 이다. $a\lt b$ 로 두면 $b\ge c/2$ 이므로 $abc\ge c^2/2$ 이고, 이로부터 $c\ll\mathrm{rad}(abc)^{3/2+\varepsilon}$ 을 얻는다. 원래 판본은 지수를 $3/2$ 로 약화한 abc 추측을 함의한다.

## 높이 하한

**정리(Hindry–Silverman).** Szpiro 비가 $\sigma$ 이하인 $E/\mathbb Q$ 와 비틀림이 아닌 $P\in E(\mathbb Q)$ 에서

$$
\hat h(P)\ge c(\sigma)\log\vert\Delta_E\vert
$$

이다. $c(\sigma)\gt 0$ 은 $\sigma$ 에만 의존한다.[^3]

Szpiro 추측이 참이면 $N_E\ge11$ 이므로 모든 곡선의 Szpiro 비가 $6+\varepsilon+\log C_\varepsilon/\log 11$ 이하이고, Lang 의 높이 하한 추측(Lang's height lower bound conjecture)이 따라 나온다.

# 활용

- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md): 위 높이 하한이 순위가 큰 곡선에서 조절자의 하한을 주고, 정수점 개수의 상계도 같은 논문에서 Szpiro 비로 표현된다.[^3]
- [Fermat 마지막 정리](fermats-last-theorem.md): $a^p+b^p=c^p$ 의 Frey 곡선은 판별식이 $(abc)^{2p}$ 규모이고 도체가 $\mathrm{rad}(abc)\le\vert abc\vert$ 이하다. Szpiro 추측에서 $\vert abc\vert^{2p}\ll\vert abc\vert^{6+\varepsilon}$ 이므로 $p\ge4$ 인 해는 $\vert abc\vert$ 가 유계라 유한개다.
- [Tate 곡선](tate-curve.md): 곱셈적 환원인 소수 $p$ 에서 $\mathrm{ord}\_p\Delta_E$ 가 Tate 매개변수 $q$ 의 $p$ 진 값이다. 판별식의 지수가 크다는 것은 $q$ 가 $p$ 진으로 작다는 것이다.

[^1]: J. Oesterlé, *Nouvelles approches du «théorème» de Fermat*, Séminaire Bourbaki exp. 694, Astérisque **161–162** (1988), 165–186. Szpiro 의 추측과 abc 추측과의 동치가 여기 정리되어 있다.
[^2]: J. Silverman, *Advanced Topics in the Arithmetic of Elliptic Curves*, GTM 151, Springer, 1994, IV 장 10 절.
[^3]: M. Hindry, J. Silverman, *The canonical height and integral points on elliptic curves*, Invent. Math. **93** (1988), 419–450.

# 연관 문서

## 선수지식

- [abc 추측](abc-conjecture.md)
- [타원곡선](elliptic-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #theorem
