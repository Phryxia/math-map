# Jacobi 타원함수

# 개요

**Jacobi 타원함수(Jacobi elliptic functions)** 는 $\sin$ 과 $\cos$ 를 매개변수 $k$ 하나로 늘린 세 함수 $\mathrm{sn}$, $\mathrm{cn}$, $\mathrm{dn}$ 이다. 길이 $\ell$ 인 진자를 작게 흔들면 주기가 $2\pi\sqrt{\ell/g}$ 이지만, 수평까지 들어 올렸다 놓으면 주기가 이보다 약 $18$ 퍼센트 길다. 진폭이 커지면 진자의 각도는 더 이상 $\sin$ 으로 적히지 않는다.

Jacobi 타원함수는 이런 진자의 각도를 시간의 함수로 정확히 쓰고, 주기를 적분 하나로 준다.

# 직관

진자의 각도 $\theta(t)$ 는 $\theta''=-\Omega^2\sin\theta$, $\Omega^2=g/\ell$ 을 만족한다. 가장 큰 각도 $\theta\_0$ 에서 놓았으면 에너지 보존으로 다음이 성립한다.

$$\tfrac12\theta'^2=\Omega^2(\cos\theta-\cos\theta_0)$$

$k=\sin(\theta\_0/2)$ 로 두고 각도를 $\sin(\theta/2)=k\sin\varphi$ 로 바꿔 쓴다. 그러면 $\cos\theta-\cos\theta\_0=2k^2\cos^2\varphi$ 이고 $d\theta=2k\cos\varphi\thinspace d\varphi/\sqrt{1-k^2\sin^2\varphi}$ 이다. $\theta=0$ 에서 출발한 시각을 $0$ 으로 두면 다음이 나온다.

$$\Omega t=\int_0^{\varphi}\frac{d\psi}{\sqrt{1-k^2\sin^2\psi}}$$

진자가 가장 높이 오르는 $\varphi=\pi/2$ 까지가 주기의 $1/4$ 이므로 주기는 이 적분에 $\varphi=\pi/2$ 를 넣은 값 $K(k)$ 의 $4/\Omega$ 배다. $k\to 0$ 이면 적분이 $\varphi$ 이고 $K=\pi/2$ 라 작은 진자의 주기 $2\pi/\Omega$ 가 나온다. 수평에서 놓으면 $k=1/\sqrt2$, $K\approx 1.8541$ 이고, 주기는 작은 진자의 $2K/\pi\approx 1.180$ 배다.

이 식은 시각을 각도 $\varphi$ 의 함수로 준다. 각도를 시각의 함수로 쓰려면 이 적분의 역함수가 필요하다. $k=0$ 이면 역함수가 $\varphi=\Omega t$ 이고 $\sin\varphi=\sin\Omega t$ 다. $k\gt 0$ 에서 $\sin\varphi$ 를 $\Omega t$ 의 함수로 쓴 것이 $\mathrm{sn}$ 이고, 진자의 각도는 $\sin(\theta/2)=k\thinspace\mathrm{sn}(\Omega t)$ 다.

# 정의

**Jacobi 타원함수** 는 제1종 [타원적분](elliptic-integrals.md)의 역함수로 정의되는 함수 $\mathrm{sn}$, $\mathrm{cn}$, $\mathrm{dn}$ 이다. $0\lt k\lt 1$ 이고

$$u=\int_0^{\varphi}\frac{d\psi}{\sqrt{1-k^2\sin^2\psi}}$$

일 때 $\varphi$ 를 $u$ 의 진폭(amplitude)이라 하고 $\varphi=\mathrm{am}\thinspace u$ 라 쓴다. $k$ 를 **모듈러스(modulus)** 라 한다. 세 함수는 다음이다[^1].

$$\mathrm{sn}\thinspace u=\sin\varphi,\qquad\mathrm{cn}\thinspace u=\cos\varphi,\qquad\mathrm{dn}\thinspace u=\sqrt{1-k^2\sin^2\varphi}$$

$x=\sin\psi$ 로 바꾸면 $u=\int_0^{\mathrm{sn}\thinspace u}dx/\sqrt{(1-x^2)(1-k^2x^2)}$ 다. $K=K(k)$ 는 $\varphi=\pi/2$ 에서의 $u$ 이고, $k'=\sqrt{1-k^2}$ 일 때 $K'=K(k')$ 라 쓴다.

직관 절의 진자에서 $k=\sin(\theta\_0/2)$ 이고 $u=\Omega t$ 다. 진자가 바닥을 지날 때 $\mathrm{sn}=0$, $\mathrm{cn}=1$ 이고, 가장 높이 오른 $u=K$ 에서 $\mathrm{sn}=1$, $\mathrm{cn}=0$ 이다. $\mathrm{dn}(\Omega t)=\cos(\theta/2)$ 이고, 각속도는 $\theta'=2k\Omega\thinspace\mathrm{cn}(\Omega t)$ 다.

# 성질

## 항등식과 도함수

정의에서 바로 다음이 나온다.

$$\mathrm{sn}^2u+\mathrm{cn}^2u=1,\qquad\mathrm{dn}^2u+k^2\mathrm{sn}^2u=1$$

$du/d\varphi=1/\mathrm{dn}\thinspace u$ 이므로 $\varphi$ 로 미분한 것에 $\mathrm{dn}\thinspace u$ 를 곱하면 $u$ 에 대한 도함수다.

$$\frac{d}{du}\mathrm{sn}\thinspace u=\mathrm{cn}\thinspace u\thinspace\mathrm{dn}\thinspace u,\qquad\frac{d}{du}\mathrm{cn}\thinspace u=-\mathrm{sn}\thinspace u\thinspace\mathrm{dn}\thinspace u,\qquad\frac{d}{du}\mathrm{dn}\thinspace u=-k^2\mathrm{sn}\thinspace u\thinspace\mathrm{cn}\thinspace u$$

## 덧셈 정리

$\sin$ 의 덧셈 정리 자리에 다음이 성립한다[^1].

$$\mathrm{sn}(u+v)=\frac{\mathrm{sn}\thinspace u\thinspace\mathrm{cn}\thinspace v\thinspace\mathrm{dn}\thinspace v+\mathrm{sn}\thinspace v\thinspace\mathrm{cn}\thinspace u\thinspace\mathrm{dn}\thinspace u}{1-k^2\mathrm{sn}^2u\thinspace\mathrm{sn}^2v}$$

$k=0$ 이면 $\mathrm{cn}=\cos$, $\mathrm{dn}=1$ 이라 $\sin$ 의 덧셈 정리다.

## 두 주기

덧셈 정리로 세 함수를 복소평면 전체의 유리형함수로 연장하면 각각 서로 독립인 두 주기를 갖는다[^1].

| 함수 | 주기 | 극 |
| --- | --- | --- |
| sn | $4K$, $2iK'$ | $iK'$, $2K+iK'$ |
| cn | $4K$, $2K+2iK'$ | $iK'$, $2K+iK'$ |
| dn | $2K$, $4iK'$ | $iK'$, $3iK'$ |

그래서 세 함수는 모두 [타원함수](elliptic-functions.md)이고, 기본 평행사변형에서 단순극 둘을 갖는 위수 $2$ 의 타원함수다. 실축에서는 주기 $4K$ 만 보이고, 이것이 직관 절의 진자의 주기다.

Weierstrass 페 함수와는 다음으로 이어진다. $\wp$ 의 세 근 $e\_1\gt e\_2\gt e\_3$ 이 실수이면 $k^2=(e\_2-e\_3)/(e\_1-e\_3)$ 로 두고 다음이 성립한다.

$$\wp(z)=e_3+\frac{e_1-e_3}{\mathrm{sn}^2\bigl(\sqrt{e_1-e_3}\thinspace z\bigr)}$$

## 직사각형 사상

$\mathrm{sn}$ 은 직사각형 $\lbrace -K\lt\mathrm{Re}\thinspace u\lt K,\thinspace 0\lt\mathrm{Im}\thinspace u\lt K'\rbrace$ 을 상반평면으로 보내는 전단사 등각사상이다. 역사상은 [Schwarz–Christoffel 공식](schwarz-christoffel-formula.md)의 직사각형 사상이고, 네 모서리 $\pm K$, $\pm K+iK'$ 이 실축의 $\pm 1$, $\pm 1/k$ 로 간다.

## 모듈러스의 두 끝

$k\to 0$ 이면 $\mathrm{sn}\to\sin$, $\mathrm{cn}\to\cos$, $\mathrm{dn}\to 1$ 이다. $k\to 1$ 이면 적분이 $\int_0^{\varphi}d\psi/\cos\psi$ 가 되어 $\mathrm{sn}\to\tanh$, $\mathrm{cn}\to\mathrm{sech}$, $\mathrm{dn}\to\mathrm{sech}$ 이다. 이때 $K\to\infty$ 라 실축의 주기가 사라진다. 진자로는 꼭대기에 정확히 닿을 만큼의 에너지로 바닥을 지나, 무한히 오래 걸려 꼭대기로 다가가는 운동이다.

# 활용

- 주기의 계산. $K(k)=\pi/(2M(1,k'))$ 이고, $M$ 은 두 수의 산술 평균과 기하 평균을 번갈아 취해 얻는 [산술기하 평균](arithmetic-geometric-mean.md)이다. 반복마다 맞는 자릿수가 두 배가 되므로 진자의 주기를 몇 번의 제곱근으로 구한다.
- 비선형 파동. Korteweg–de Vries 방정식(Korteweg–de Vries equation)의 주기 진행파는 $\mathrm{cn}^2$ 꼴이고, 이름을 따 cnoidal 파(cnoidal wave)라 한다. $k\to 1$ 의 극한이 $\mathrm{sech}^2$ 꼴의 [솔리톤](solitons.md)이다.
- 강체의 회전. 외력이 없는 강체의 Euler 방정식(Euler's equations)에서 세 주축 둘레 각속도는 각각 $\mathrm{sn}$, $\mathrm{cn}$, $\mathrm{dn}$ 의 상수배다.
- 필터 설계. 타원 필터(elliptic filter)는 통과 대역과 저지 대역 모두에서 크기가 같은 폭으로 오르내리는 필터이고, 그 전달함수의 크기를 Jacobi 타원함수로 만든 유리함수로 쓴다.

[^1]: National Institute of Standards and Technology (NIST), Digital Library of Mathematical Functions, 22장, https://dlmf.nist.gov/22 (22.2 정의, 22.4 주기와 극, 22.8 덧셈 정리, 22.13 도함수).

# 연관 문서

## 선수지식

- [타원함수](elliptic-functions.md)
- [타원적분](elliptic-integrals.md)
- [Schwarz–Christoffel 공식](schwarz-christoffel-formula.md)

## 더 알아보기

- [산술기하 평균](arithmetic-geometric-mean.md)

#complex_analysis #analysis #signal_processing
