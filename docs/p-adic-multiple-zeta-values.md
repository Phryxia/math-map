# p 진 다중 zeta 값

# 개요

$p$ 진 다중 zeta 값은 사영직선에서 $0,1,\infty$ 를 뺀 공간 위의 반복 [Coleman 적분](coleman-integration.md)으로 정의되는 $\mathbb Q_p$ 의 수다. [다중 zeta 값](multiple-zeta-values.md)의 반복 적분 표현에서 복소 적분을 $p$ 진 적분으로 바꾼 것이다.

급수 표현이 $p$ 진수체에서 수렴하지 않으므로 급수에서 나오는 관계는 그대로 옮겨지지 않는다. 반복 적분에서 나오는 셔플 관계는 그대로 성립한다.

# 직관

[Kubota–Leopoldt p 진 zeta 함수](kubota-leopoldt-zeta.md)는 $\zeta(1-k)$ 의 값들을 $p$ 진수체에서 보간한다. 깊이 $2$ 이상의 다중 zeta 값에 같은 일을 하려면 먼저 그 값을 $p$ 진수로 적어야 한다. 급수

$$
\zeta(2,1)=\sum_{n_1\gt n_2\ge 1}\frac{1}{n_1^2n_2}
$$

를 $p$ 진 절댓값으로 재면 $\vert 1/n\vert_p$ 가 $p^{v_p(n)}$ 이므로 항이 작아지지 않고 급수가 수렴하지 않는다. 급수 쪽으로는 값이 나오지 않는다.

다중 zeta 값의 다른 표현을 쓴다. 무게 $w$ 의 값은 $\omega_0=dt/t$ 와 $\omega_1=dt/(1-t)$ 의 단어에 대한 $w$ 겹 적분이고, 이 표현에는 급수의 수렴이 들어가지 않는다. $\zeta(2)$ 라면

$$
\zeta(2)=\int_{0\lt t_2\lt t_1\lt 1}\frac{dt_1}{t_1}\thinspace\frac{dt_2}{1-t_2}
$$

이다. 같은 미분형식을 $\mathbb Q_p$ 위에서 적분하면 된다.

$\mathbb Q_p$ 는 완전 비연결이어서 $0$ 에서 $1$ 로 가는 경로가 없다. Coleman 적분이 각 잔차 원판의 국소 원시함수를 Frobenius 작용과 호환되게 이어 붙여 이 문제를 푼다. 반복 적분도 안쪽 적분을 함수로 보아 다시 적분하는 것이므로 같은 방법으로 정의된다.

끝점이 남는다. $0$ 은 $\omega_0$ 의 극이고 $1$ 은 $\omega_1$ 의 극이므로 적분이 끝점에서 발산한다. 복소수 쪽에서도 같은 발산이 있고, 거기서는 끝점을 점이 아니라 접벡터로 잡아 발산하는 항을 떼어낸다. $p$ 진 쪽에서도 같은 정규화를 쓴다. 그렇게 정해진 값이 $p$ 진 다중 zeta 값이다.

# 정의

## 공간과 단어

$X=\mathbb P^1\setminus\lbrace 0,1,\infty\rbrace$ 를 $\mathbb Q_p$ 위에서 보고 $\omega_0=dt/t$, $\omega_1=dt/(1-t)$ 로 둔다. 양의 정수 $s_1,\dots,s_k$ 에 $s_1\ge 2$ 를 걸고 단어

$$
W(s_1,\dots,s_k)=\omega_0^{s_1-1}\omega_1\cdots\omega_0^{s_k-1}\omega_1
$$

을 대응시킨다. 복소수 쪽에서 이 단어의 반복 적분이 $\zeta(s_1,\dots,s_k)$ 다.

## 접기저점

$0$ 에서 접벡터 $\partial/\partial t$ 를, $1$ 에서 $-\partial/\partial t$ 를 끝점으로 잡는다. 극 근처에서 반복 적분은 $\log$ 의 거듭제곱으로 발산하고, 그 발산항을 떼어낸 상수항을 적분값으로 정한다. 이 정규화를 **접기저점**에 대한 적분이라 한다.

## p 진 다중 zeta 값

접기저점으로 정규화한 반복 Coleman 적분

$$
\zeta_p(s_1,\dots,s_k)=\int_0^1 W(s_1,\dots,s_k)
$$

의 값을 **$p$ 진 다중 zeta 값**이라 한다.[^1] 깊이 $1$ 이면 $\zeta_p(s)$ 이고, 무게와 깊이는 복소수 쪽과 같이 $w=s_1+\cdots+s_k$ 와 $k$ 다.

## p 진 Drinfeld 결합자

같은 값을 미분방정식의 해로도 얻는다. 비가환 변수 $A,B$ 에 대한 $p$ 진 KZ(Knizhnik–Zamolodchikov) 방정식

$$
\frac{dG}{dt}=\Bigl(\frac{A}{t}+\frac{B}{t-1}\Bigr)G
$$

는 $0$ 근처에서 $t^A$ 꼴로, $1$ 근처에서 $(1-t)^B$ 꼴로 정규화된 해 $G_0$ 와 $G_1$ 을 각각 하나씩 갖는다. 두 해를 비교한

$$
G_0=G_1\thinspace\Phi_p
$$

의 $\Phi_p$ 를 **$p$ 진 Drinfeld 결합자**라 하고, 그 계수가 $p$ 진 다중 zeta 값이다.[^1]

# 성질

## 셔플 관계

**정리.** 두 단어 $W,W'$ 에 대해 $\int_0^1W\cdot\int_0^1W'$ 는 두 단어의 글자를 각자의 순서를 지키며 섞은 모든 단어의 적분의 합이다.

Coleman 적분의 반복 적분이 복소수 쪽과 같은 곱 공식을 만족하므로 증명이 그대로 옮겨진다. 무게 $2$ 의 단어 $\omega_0\omega_1$ 둘을 섞으면 복소수 쪽과 같은 꼴

$$
\zeta_p(2)^2=4\zeta_p(3,1)+2\zeta_p(2,2)
$$

를 얻는다.

## 스터플 관계의 자리

복소수 쪽 스터플 관계는 급수의 합 범위를 가르는 데서 나오고, $p$ 진 쪽에는 그 급수가 없다. 그래도 두 관계가 함께 주는 등식은 성립한다.

**정리(Furusho–Jafari).** $p$ 진 다중 zeta 값은 정규화된 이중 셔플 관계를 만족한다.[^2]

증명은 $\Phi_p$ 가 Drinfeld 결합자의 방정식을 만족한다는 것에서 나온다. 결합자의 좌표를 급수가 아니라 [Lie 대수](lie-algebras.md)의 관계로 적으면 복소수 쪽과 $p$ 진 쪽이 같은 방정식을 쓴다.

## 쌍대성

**정리.** 단어를 역순으로 읽고 $\omega_0$ 과 $\omega_1$ 을 맞바꾼 단어가 같은 값을 준다.

치환 $t\mapsto 1-t$ 가 $X$ 의 자기동형이고 두 미분형식을 맞바꾸며 두 접기저점을 맞바꾼다. Coleman 적분이 이 자기동형과 가환하므로 복소수 쪽 증명이 그대로 옮겨진다. 복소수 쪽 $\zeta(2,1)=\zeta(3)$ 에 대응해 $\zeta_p(2,1)=\zeta_p(3)$ 이다.

## 깊이 1 의 값

깊이 $1$ 의 값은 Kubota–Leopoldt $p$ 진 zeta 함수의 값으로 적힌다.[^1] 복소수 쪽에서 깊이 $1$ 이 [Riemann zeta 함수](riemann-zeta.md)의 정수점 값인 것에 대응하고, 두 경우 모두 깊이 $2$ 이상의 값이 깊이 $1$ 의 값으로 환원되지 않는다.

# 활용

- [Coleman 적분](coleman-integration.md): 반복 Coleman 적분이 쓰이는 자리 가운데 끝점이 특이점인 경우다. 접기저점 정규화가 그 특이점을 처리한다.
- [다중 zeta 값](multiple-zeta-values.md): 복소수 쪽 값과 $p$ 진 쪽 값이 같은 단어로 매개되므로, 단어 사이의 등식 가운데 어느 것이 적분의 형식적 성질에서 오고 어느 것이 급수에서 오는지가 두 쪽의 비교로 갈린다.
- [Kubota–Leopoldt p 진 zeta 함수](kubota-leopoldt-zeta.md): 깊이 $1$ 의 값이 이 함수의 값이다.
- [Chabauty–Kim 방법](chabauty-kim.md): $X$ 의 $p$ 진 단일값 군을 쓰는 구성이고, 그 군의 좌표 함수가 $p$ 진 다중 로그와 $p$ 진 다중 zeta 값으로 적힌다.

[^1]: Hidekazu Furusho, "p-adic multiple zeta values I — p-adic multiple polylogarithms and the p-adic KZ equation", *Inventiones Mathematicae* **155** (2004), 253–286.

[^2]: Hidekazu Furusho and Amir Jafari, "Regularization and generalized double shuffle relations for p-adic multiple zeta values", *Compositio Mathematica* **143** (2007), 1089–1107.

# 연관 문서

## 선수지식

- [Coleman 적분](coleman-integration.md)
- [다중 zeta 값](multiple-zeta-values.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #algebra
