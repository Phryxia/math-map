# Sato–Tate 분포

# 개요

[Deligne 의 정리](deligne-weil-conjectures.md)는 Frobenius 고윳값의 절댓값을 확정한다. 타원곡선 $E/\mathbb Q$ 와 좋은 환원의 소수 $p$ 에서

$$
a_p=p+1-\char35{}E(\mathbb F_p),
\qquad
|a_p|\le2\sqrt p
$$

이고, 두 고윳값은 $\sqrt p\thinspace e^{\pm i\theta_p}$ 꼴이다. 정규화하면

$$
\frac{a_p}{2\sqrt p}=\cos\theta_p\in[-1,1],\qquad\theta_p\in[0,\pi]
$$

다. Deligne 의 정리는 각이 이 구간 안에 있다는 것이고, Sato–Tate 는 $p$ 를 키울 때 각들이 흩어지는 방식을 말한다.

Sato 는 수치 실험으로, Tate 는 이론적 근거로 1960 년대에 같은 답에 도달했다. $E$ 가 복소곱셈(complex multiplication, CM)을 갖지 않으면

$$
\theta_p\ \sim\ \frac2\pi\sin^2\theta\thinspace d\theta
$$

를 따른다. $\cos\theta$ 로 옮기면 반원 분포 $\frac2\pi\sqrt{1-x^2}\thinspace dx$ 다. 이 측도는 콤팩트군 $\mathrm{SU}(2)$ 의 켤레류 위 Haar 측도이고, Frobenius 가 $\mathrm{SU}(2)$ 안에 균등하게 흩어진다는 뜻이다.

복소곱셈이 있으면 대칭군이 $\mathrm{SU}(2)$ 안의 정규화 토러스로 줄어든다. 절반의 소수에서 $a_p=0$ 이고 그 소수에서 곡선이 초특이하며, 나머지 각은 균등분포를 따른다.

대칭곱 $L$ 함수 $L(\mathrm{Sym}^n E,s)$ 가 전부 해석적으로 접속되고 $\mathrm{Re}(s)=1$ 위에서 영점이 없으면 Wiener–Ikehara 형 Tauber 정리가 분포를 준다. 이 조건은 2006–2011 년에 Taylor 와 공저자들이 잠재적 모듈러성으로 확립했다.

# 직관

## Weyl 적분공식

$\mathrm{SU}(2)$ 의 원소는 켤레를 무시하면 고윳값 $e^{\pm i\theta}$ 로 결정된다. 곧 켤레류의 공간이 $[0,\pi]$ 다. $\mathrm{SU}(2)$ 의 Haar 측도를 이 공간으로 밀어내면 Weyl 적분공식이

$$
\frac2\pi\sin^2\theta\thinspace d\theta
$$

를 준다. $\sin^2$ 는 Weyl 분모 $|e^{i\theta}-e^{-i\theta}|^2$ 에서 오고, 서로 다른 고윳값이 밀어내는 효과다. 랜덤 행렬 이론의 고윳값 반발과 같다.

밀도가 $\sin^2$ 이므로 $a_p$ 가 Hasse 한계에 닿는 $\theta=0$ 이나 $\theta=\pi$ 근처가 드물고 $a_p\approx0$ 근처가 가장 흔하다.

## Sato–Tate 군

곡선마다 **Sato–Tate 군** $\mathrm{ST}(E)$ 라는 콤팩트군이 붙고, 정규화된 Frobenius 가 그 군의 켤레류에서 Haar 측도로 등분포한다.

- **복소곱셈이 없으면** $\mathrm{ST}(E)=\mathrm{SU}(2)$ 다. $\ell$ 진 표현의 상이 열려 있다(Serre 의 정리). 측도가 $\frac2\pi\sin^2\theta\thinspace d\theta$ 다.
- **복소곱셈이 있으면** 표현의 상이 훨씬 작다. 허수이차체 $K$ 안의 Hecke 지표로 설명되고, $\mathrm{ST}(E)$ 는 정규화 토러스 $N(\mathrm{U}(1))$ 다. $\mathbb Q$ 위에서 보면 절반의 소수($K$ 에서 불활성인 소수)에서 곡선이 초특이라 $a_p=0$ 이고, 나머지 절반에서 각이 $[0,\pi]$ 에 **균등**하다.

$\mathrm{U}(1)$ 의 Haar 측도가 각에 대해 균등하므로 균등분포가 나온다. 군이 바뀌면 측도가 바뀐다.

## 대칭곱의 역할

측도를 확정하려면 모든 모멘트를 확정해야 한다. $\mathrm{SU}(2)$ 의 기약표현은 대칭곱 $\mathrm{Sym}^n$ 이고 그 지표가

$$
\mathrm{tr}\thinspace\mathrm{Sym}^n(\theta)=\frac{\sin((n+1)\theta)}{\sin\theta}
=U_n(\cos\theta)
$$

곧 제2종 Chebyshev 다항식이다. 이 함수들이 $\frac2\pi\sin^2\theta\thinspace d\theta$ 에 대해 정규직교기저를 이루므로, 모든 $n\ge1$ 에서 $\sum_p U_n(\cos\theta_p)$ 가 주 항 없이 작음을 보이면 등분포가 나온다.

그 합을 통제하는 것이 $L(\mathrm{Sym}^nE,s)$ 다. $\mathrm{Re}(s)=1$ 에서 영점도 극점도 없으면 계수합이 상쇄된다. 등분포 문제가 무한히 많은 $L$ 함수의 해석적 성질로 환원된다. 소수 정리가 $\zeta(1+it)\ne0$ 으로 환원되는 것과 같은 구조이고 함수의 개수만 다르다.

# 정의

## 정규화와 Sato–Tate 측도

$E/\mathbb Q$ 가 좋은 환원을 갖는 소수 $p$ 에서

$$
a_p=p+1-\char35{}E(\mathbb F_p),
\qquad
\theta_p=\arccos\negthinspace\Big(\frac{a_p}{2\sqrt p}\Big)\in[0,\pi]
$$

로 둔다. **Sato–Tate 측도**는

$$
\mu_{ST}=\frac2\pi\sin^2\theta\thinspace d\theta
\qquad\Big(\text{동치로}\quad\frac2\pi\sqrt{1-x^2}\thinspace dx,\ x=\cos\theta\Big)
$$

다. 전체 질량이 $1$ 이고 $[0,\pi]$ 위에서 대칭이다.

## Sato–Tate 추측(정리)

> **정리 (Taylor 등, 2006–2011).** $E/\mathbb Q$ 가 복소곱셈을 갖지 않으면 $\lbrace\theta_p\rbrace$ 는 $\mu_{ST}$ 에 대해 등분포한다. 곧 모든 $0\le\alpha\lt\beta\le\pi$ 에서
> $$\lim_{X\to\infty}\frac{\char35{}\lbrace p\le X:\theta_p\in[\alpha,\beta]\rbrace}{\char35{}\lbrace p\le X\rbrace}=\int_\alpha^\beta\frac2\pi\sin^2\theta\thinspace d\theta$$

이 결과는 전체수체 위의 타원곡선까지 확장되었다.

## 대칭곱 L 함수

$\alpha_p,\beta_p$ 를 $p$ 에서의 정규화된 Frobenius 고윳값, 곧 $\alpha_p\beta_p=1$ 인 쌍이라 할 때

$$
L(\mathrm{Sym}^nE,s)=\prod_{p\ \text{좋음}}\ \prod_{k=0}^{n}
\Big(1-\alpha_p^{\thinspace k}\beta_p^{\thinspace n-k}p^{-s}\Big)^{-1}
$$

이다. $n=1$ 이 $E$ 의 Hasse–Weil $L$ 함수이고 $n=2$ 는 수반 $L$ 함수와 가깝다.

## Sato–Tate 군

$\mathrm{ST}(E)$ 는 $\ell$ 진 표현의 상의 Zariski 폐포에 대응하는 콤팩트 실형태이고, 타원곡선에서는 두 경우뿐이다.

| | $\mathrm{ST}(E)$ | 측도 | $a_p=0$ 인 소수의 밀도 |
|---|---|---|---|
| CM 없음 | $\mathrm{SU}(2)$ | $\frac2\pi\sin^2\theta\thinspace d\theta$ | $0$ |
| CM 있음 | $N(\mathrm{U}(1))$ | $\frac12\delta_{\pi/2}+\frac1{2\pi}d\theta$ | $\tfrac12$ |

종수 2 이상의 아벨 다양체에서는 가능한 $\mathrm{ST}$ 군이 더 많고, 종수 2 에서 $52$ 개로 분류되어 있다.

# 성질

## 증명의 난점

$n=1$ 의 해석적 접속은 모듈러성 정리가 주고, $n=2$ 는 Gelbart–Jacquet 이, $n=3,4$ 는 Kim–Shahidi 가 해결했다. 등분포에는 모든 $n$ 에 대한 결과가 필요하다.

Taylor 와 공저자들은 $L(\mathrm{Sym}^nE,s)$ 가 $\mathbb Q$ 위에서 자기동형임을 직접 보이는 대신 어떤 전체수체로 올라가면 자기동형이 된다는 잠재적 모듈러성만 보였다. 그것으로 해석적 접속과 $\mathrm{Re}(s)=1$ 에서의 비소멸을 얻는다. 도구는 모듈러성 올림 정리 $R=T$ 와 대칭곱을 실현하는 Calabi–Yau 다양체 족의 구성이다.

## 오차항과 Lang–Trotter 추측

정리는 극한만 주고 수렴 속도는 주지 않는다. 적절한 $L$ 함수의 Riemann 가설을 가정하면 오차가 $O(X^{-1/4})$ 규모로 예상되고 수치 실험이 이와 맞는다. 무조건적 오차항은 더 약하다.

- **Lang–Trotter 추측.** 고정된 $r$ 에 대해 $a_p=r$ 인 소수의 개수가 $\asymp\sqrt X/\log X$ 라는 추측. Sato–Tate 는 각 점의 밀도가 $0$ 이라는 것까지만 준다.
- **초특이 소수.** CM 이 없는 곡선에서 $a_p=0$ 인 소수의 밀도는 $0$ 이지만 무한히 많다(Elkies). 개수는 Lang–Trotter 의 특수한 경우다.

## 등분포와 L 함수

Sato–Tate 의 증명 구조는 다른 등분포 정리와 같다.

| 등분포 진술 | 필요한 해석적 사실 |
|---|---|
| 소수 정리 | $\zeta(1+it)\ne0$ |
| 산술급수의 소수 분포 | $L(1+it,\chi)\ne0$ |
| [Chebotarev 밀도](chebotarev.md) | Artin $L$ 함수의 비소멸 |
| Sato–Tate | 모든 $\mathrm{Sym}^n$ $L$ 함수의 비소멸 |

지표마다 $L$ 함수를 하나씩 놓고 그 $L$ 함수가 $\mathrm{Re}(s)=1$ 에서 영점을 갖지 않으면 해당 지표의 평균이 사라진다. 지표들이 완비계를 이루므로 측도가 확정된다. Sato–Tate 에서는 군이 $\mathrm{SU}(2)$ 라 기약표현이 무한히 많다.

# 활용

## 복소곱셈이 있는 곡선

$y^2=x^3+1$ 은 $j=0$ 이고 $\mathbb Z[\zeta_3]$ 에 의한 복소곱셈을 갖는다.

소수의 절반에서 $a_p=0$ 이고 그 소수는 전부 $p\equiv2\pmod3$ 다. $\mathbb Q(\zeta_3)$ 에서 불활성인 소수이고 거기서 곡선이 초특이하다. 남은 절반의 각 $\theta_p$ 는 Sato–Tate 측도 $\tfrac2\pi\sin^2\theta$ 가 아니라 $[0,\pi]$ 위의 균등분포를 따른다.

측도는 곡선의 대칭군이 정한다. $\mathrm{SU}(2)$ 이면 $\sin^2$ 이고 $\mathrm{U}(1)$ 이면 균등이다.

## 쓰이는 자리

- **추측의 발견.** Sato 의 원래 작업이 수치 실험이었다. 이런 표는 [SEA](sea-algorithm.md)(Schoof–Elkies–Atkin)나 [Kedlaya](kedlaya-algorithm.md) 알고리즘으로 만들고, LMFDB(L-functions and Modular Forms Database)의 곡선 자료가 그 결과다.
- **CM 판정.** $a_p=0$ 인 소수의 비율이 $\tfrac12$ 에 가까우면 복소곱셈이 있다.
- **Sato–Tate 군 분류.** 아벨 다양체와 일반 동기에 대해 어떤 콤팩트군이 나타나는지를 분류하는 작업이 진행 중이고, 종수 2 의 $52$ 개 목록이 그 결과다.
- **모듈러성 올림.** 증명에 쓰인 $R=T$ 형 정리는 [Langlands 강령](langlands-program.md)의 표준 도구다.

# 연관 문서

## 선수지식

- [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)

## 더 알아보기

- [Lang–Trotter 추측과 초특이 소수](lang-trotter.md)

#number_theory #probability #analysis #computation
