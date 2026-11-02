# 재생핵 Hilbert 공간

# 개요

**재생핵 Hilbert 공간(reproducing kernel Hilbert space)** 은 각 점에서의 함숫값을 내적 하나로 계산할 수 있는 함수들의 공간이다. 평면의 자료가 원점에 가까운 것과 먼 것으로 나뉘면 직선으로 가를 수 없고, 좌표를 $(x_1^2,\sqrt2\thinspace x_1x_2,x_2^2)$ 로 늘리면 평면으로 갈라지지만 차수를 올릴수록 늘린 좌표의 수가 폭발한다. 이 공간을 쓰면 늘린 좌표를 만들지 않고 두 점의 함수 $K(x,z)=\langle x,z\rangle^2$ 의 값만으로 같은 계산을 한다.

# 직관

평면의 자료가 두 부류로 나뉘는데 원점에서 가까운 것과 먼 것이어서 직선으로 갈라지지 않는다. 좌표를 늘린다. $(x_1,x_2)$ 를 $\varphi(x)=(x_1^2,\sqrt2\thinspace x_1x_2,x_2^2)$ 로 보내면 원 $x_1^2+x_2^2=r^2$ 의 안팎이 3차원에서 평면 $u_1+u_3=r^2$ 의 양쪽으로 갈라진다.

차수를 올리면 좌표의 개수가 폭발한다. $d$ 개 좌표의 $p$ 차 단항식은 $\binom{d+p-1}{p}$ 개이고 $d=100$, $p=5$ 에서 이미 억 단위다. 좌표를 모두 만들어 저장하는 방식으로는 계산이 멈춘다.

[서포트 벡터 머신](support-vector-machine.md)의 쌍대문제와 [커널 PCA](kernel-pca.md)(principal component analysis)의 고유값 문제에는 자료가 내적으로만 들어간다. 위 사상 $\varphi$ 에서

$$\langle\varphi(x),\varphi(z)\rangle = x_1^2z_1^2+2x_1x_2z_1z_2+x_2^2z_2^2 = (x_1z_1+x_2z_2)^2=\langle x,z\rangle^2$$

이다. 좌표 세 개를 만들지 않고 원래 좌표 두 개로 내적이 계산된다.

남는 질문은 어떤 두 변수 함수가 어떤 사상의 내적으로 적히는가다. 함수가 대칭이고 유한 개의 점에서 만든 [행렬](matrices.md)이 모두 양의 준정부호이면 그런 사상이 있다. 사상이 도착하는 공간을 함수들로 된 [Hilbert 공간](hilbert-spaces.md)으로 잡으면, 그 공간은 함수 $K$ 하나가 정하고 점 $x$ 에서의 함숫값이 $K(x,\cdot)$ 와의 내적으로 계산된다.

# 정의

## 양의 준정부호 핵

집합 $\mathcal X$ 에서 $K\colon\mathcal X\times\mathcal X\to\mathbb R$ 가 대칭이고, 임의의 점 $x_1,\dots,x_n$ 과 [실수](real-numbers.md) $c_1,\dots,c_n$ 에 대해

$$\sum_{i=1}^n\sum_{j=1}^n c_ic_jK(x_i,x_j)\ge 0$$

이면 $K$ 를 **양의 준정부호 핵(positive semidefinite kernel)** 이라 한다.

직관 절의 $K(x,z)=\langle x,z\rangle^2$ 에서는 이중합이 $\Vert\sum_i c_i\varphi(x_i)\Vert^2$ 과 같으므로 음이 아니고, 이 $K$ 는 양의 준정부호 핵이다. 점 $x_1=(1,0)$, $x_2=(1,1)$ 에서 값을 늘어놓으면 $\begin{pmatrix}1&1\cr 1&4\end{pmatrix}$ 이다. 반면 $K(x,z)=\Vert x-z\Vert$ 는 대칭이지만 같은 두 점에서 $c=(1,-1)$ 로 이중합이 $0-1-1+0=-2$ 이므로 양의 준정부호 핵이 아니다.

## 재생핵 Hilbert 공간

$\mathcal X$ 에서 실수로 가는 함수들로 된 Hilbert 공간 $\mathcal H$ 가 다음 둘을 만족하면 $K$ 의 **재생핵 Hilbert 공간**이다.

- 모든 $x$ 에 대해 $K_x=K(x,\cdot)$ 이 $\mathcal H$ 에 속한다
- 모든 $f\in\mathcal H$ 와 모든 $x$ 에 대해 $f(x)=\langle f,K_x\rangle\_{\mathcal H}$ 다

둘째 조건이 **재생 성질(reproducing property)** 이다.

$K(x,z)=\langle x,z\rangle^2$ 의 재생핵 Hilbert 공간은 $w\in\mathbb R^3$ 마다 $f_w(x)=\langle w,\varphi(x)\rangle=w_1x_1^2+\sqrt2\thinspace w_2x_1x_2+w_3x_2^2$ 인 이차형식들의 공간이고, 내적은 $\langle f_w,f_v\rangle=\langle w,v\rangle$ 다. $K_x=f\_{\varphi(x)}$ 이므로 $\langle f_w,K_x\rangle=\langle w,\varphi(x)\rangle=f_w(x)$ 가 재생 성질이다. 원을 가르는 함수 $f(x)=x_1^2+x_2^2$ 는 $w=(1,0,1)$ 에 해당하고, 점 $(1,1)$ 에서 $\langle (1,0,1),(1,\sqrt2,1)\rangle=2=f(1,1)$ 이다.

# 성질

## Gram 행렬

$K$ 가 양의 준정부호 핵인 것은 모든 유한 점 $x_1,\dots,x_n$ 에서 Gram 행렬(Gram matrix) $\lbrack K(x_i,x_j)\rbrack\_{i,j}$ 가 양의 준정부호 행렬인 것과 동치다. 정의의 이중합이 이 행렬의 이차형식이다.

## Moore–Aronszajn 정리

Moore–Aronszajn 정리(Moore–Aronszajn theorem). 양의 준정부호 핵 $K$ 마다 $K$ 를 재생핵으로 갖는 Hilbert 공간이 유일하게 존재한다.

구성은 $K_x$ 들의 유한 선형결합이 이루는 공간에서 시작한다. 거기에

$$\Big\langle\sum_i a_iK\_{x_i},\ \sum_j b_jK\_{z_j}\Big\rangle=\sum_i\sum_j a_ib_jK(x_i,z_j)$$

로 내적을 주면 양의 준정부호 조건이 이 값이 음이 아님을 보장한다. 이 공간을 완비화(completion)한다. 유일성은 두 공간이 같은 조밀 부분공간을 갖고 노름이 일치하는 것에서 나온다.

## 점 평가의 연속성

재생 성질과 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)에서 $\vert f(x)\vert\le\Vert f\Vert\thinspace\sqrt{K(x,x)}$ 다. 노름 수렴이 각 점에서의 수렴을 함의하므로, 재생핵 Hilbert 공간의 원소는 동치류가 아니라 함수 하나다. [Lᵖ 공간](lp-spaces.md)의 원소가 영집합에서 다른 함수들의 동치류인 것과 다르다.

## 특징 사상

재생 성질에 $f=K_z$ 를 넣으면 $K(z,x)=\langle K_z,K_x\rangle$ 이다. 그래서 특징 사상(feature map) $\varphi(x)=K_x$ 로 두면 $\langle\varphi(x),\varphi(z)\rangle=K(x,z)$ 다. 핵의 값만 계산하면 이 사상이 가는 공간의 차원과 무관하게 내적을 얻는다. 같은 핵을 주는 특징 사상은 여럿이고, 그중 하나가 $\varphi(x)=K_x$ 다.

## 표현자 정리

표현자 정리(representer theorem). 손실이 자료점에서의 함숫값 $f(x_1),\dots,f(x_n)$ 에만 의존하고 벌점이 $\Vert f\Vert\_{\mathcal H}$ 의 증가함수이면, 최소해는

$$f=\sum_{i=1}^n\alpha_iK\_{x_i}$$

꼴로 적힌다.

증명의 요지. $f$ 를 $K\_{x_1},\dots,K\_{x_n}$ 이 생성하는 부분공간 성분 $f\_\parallel$ 과 그 직교여공간 성분 $f\_\perp$ 로 가른다. 재생 성질에서 $f(x_i)=\langle f,K\_{x_i}\rangle=f\_\parallel(x_i)$ 이므로 손실은 $f\_\perp$ 에 의존하지 않고, 노름은 $\Vert f\Vert^2=\Vert f\_\parallel\Vert^2+\Vert f\_\perp\Vert^2$ 이므로 $f\_\perp=0$ 이 벌점을 줄인다.

무한차원 공간에서의 최소화 문제가 계수 $n$ 개의 문제로 줄어든다.

## Mercer 전개

Mercer 정리(Mercer's theorem). 콤팩트 거리공간 위의 연속 핵은 지지집합이 전체인 유한 측도에 대한 적분작용소(integral operator)의 고유함수 $e_j$ 와 고윳값 $\lambda_j\ge 0$ 으로

$$K(x,z)=\sum_{j=1}^{\infty}\lambda_je_j(x)e_j(z)$$

로 전개되고 수렴이 균등하다. 특징 사상을 $\varphi(x)=(\sqrt{\lambda_j}e_j(x))\_j$ 로 잡을 수 있고, 공간의 노름은 $\Vert f\Vert^2=\sum_j c_j^2/\lambda_j$ 로 적힌다. 여기서 $c_j$ 는 $f$ 의 전개 계수다.

## 핵의 예

| 핵 | 식 | 공간의 차원 |
| --- | --- | --- |
| 선형 | $\langle x,z\rangle$ | $d$ |
| $p$ 차 다항 | $(\langle x,z\rangle+c)^p$ | 유한 |
| Gauss | $e^{-\Vert x-z\Vert^2/(2\sigma^2)}$ | 무한 |
| Laplace | $e^{-\Vert x-z\Vert/\sigma}$ | 무한 |

양의 준정부호 핵의 합, 양수배, 곱은 다시 양의 준정부호 핵이다. Gauss 핵의 공간은 콤팩트 집합 위의 연속함수를 균등하게 근사한다.

# 활용

## 커널 치환

서포트 벡터 머신의 쌍대문제와 판별함수에 자료가 내적으로만 들어가므로, 내적을 $K$ 로 바꾸는 커널 치환(kernel trick)으로 특징 공간에서의 선형 분류를 한다. 표현자 정리가 그 해가 자료점의 핵 함수들의 결합임을 보장한다. 커널 PCA 가 [공분산](covariance.md)의 고유벡터에 같은 치환을 쓴다.

## Gauss 과정의 공분산함수

[Gauss 과정](gaussian-processes.md)의 공분산함수는 양의 준정부호 핵이고, 관측에서 얻는 사후평균은 그 핵의 재생핵 Hilbert 공간의 원소다. 사전분포의 선택과 함수족의 선택이 같은 핵으로 적힌다.

## 분포의 매장

확률분포 $P$ 를 평균 매장(kernel mean embedding) $\mu_P=E\_{X\sim P}\lbrack K_X\rbrack$ 로 보내면 분포가 공간의 한 점이 된다. Gauss 핵처럼 이 대응이 단사인 핵을 특성 핵(characteristic kernel)이라 한다. 두 분포의 거리 $\Vert\mu_P-\mu_Q\Vert$ 는 최대 평균 불일치(maximum mean discrepancy, MMD)이고, 두 표본 검정(two-sample test)의 통계량으로 쓴다.

# 연관 문서

## 선수지식

- [Hilbert 공간](hilbert-spaces.md)

## 더 알아보기

- [핵 능형회귀](kernel-ridge-regression.md)
- [커널 PCA](kernel-pca.md)

#functional_analysis #machine_learning #statistics
