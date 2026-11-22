# 확률적 균질화

# 개요

**확률적 균질화(stochastic homogenization)** 는 계수가 무작위로 놓인 미세 구조를 가진 확산 방정식이, 미세 구조가 작아질 때 상수 계수의 방정식으로 가까워진다는 이론이다. 막대를 짧은 칸으로 나누고 칸마다 동전을 던져 전도율 $1$ 인 재료나 $4$ 인 재료를 채우면, 칸의 배치는 주기가 없고 동전을 다시 던질 때마다 달라진다.

그래도 칸이 아주 짧으면 거의 모든 배치에서 막대는 전도율 $8/5$ 인 한 재료처럼 열을 전한다. 확률적 균질화는 배치의 통계가 위치를 옮겨도 같다는 조건 아래 이 상수를 정하고, 그 상수가 배치에 의존하지 않음을 [에르고딕 정리](ergodic-theorem.md)로 보인다.

# 직관

칸의 폭을 $\varepsilon$ 이라 하고, $j$ 번째 칸의 전도율 $a_j$ 를 독립인 동전 던지기로 $1$ 이나 $4$ 로 정한다. 막대 위의 전도율은 $a_\varepsilon(x)=a_{\lfloor x/\varepsilon\rfloor}$ 다. [H 수렴](h-convergence.md)의 1차원 공식에 따르면, $1/a_\varepsilon$ 이 어떤 함수로 약별 수렴할 때 그 함수의 역수가 극한 전도율이다.

구간 $\lbrack s,t\rbrack$ 위에서 $1/a_\varepsilon$ 의 적분은 그 구간에 든 약 $(t-s)/\varepsilon$ 개 칸의 $1/a_j$ 에 $\varepsilon$ 을 곱해 더한 값이다. [큰 수의 법칙](law-of-large-numbers.md)으로 이 값은 거의 확실하게 $(t-s)$ 에 기댓값 $E\lbrack 1/a\rbrack=\tfrac12\cdot 1+\tfrac12\cdot\tfrac14=\tfrac58$ 을 곱한 값으로 간다. 그러므로 $1/a_\varepsilon$ 은 상수 $5/8$ 로 약별 수렴하고, 극한 전도율은 거의 모든 동전열에서 $8/5$ 다.

극한이 무작위가 아닌 상수인 까닭은 평균을 내는 칸이 점점 많아지기 때문이다. 2차원 이상에서는 극한 계수를 $1/a$ 의 평균으로 적는 공식이 없다. 주기 균질화에서 한 주기 위의 셀 문제를 풀었듯이, 무작위 배치 전체를 하나의 공간으로 보고 그 위에서 셀 문제를 푼다.

# 정의

## 정상 에르고딕 계수

$(\Omega,\mathcal F,P)$ 는 확률공간이고, $\mathbb R^n$ 의 각 원소 $x$ 가 $P$ 를 보존하는 가측사상 $\tau_x:\Omega\to\Omega$ 로 작용하며 $\tau_{x+y}=\tau_x\tau_y$ 다. 모든 $x$ 에서 $\tau_x^{-1}E=E$ 인 사건 $E$ 의 확률이 $0$ 이나 $1$ 뿐이면 이 작용을 **에르고딕(ergodic)** 이라 한다.

가측사상 $A_0:\Omega\to M(\alpha,\beta)$ 에서 $A(x,\omega)=A_0(\tau_x\omega)$ 로 정한 무작위 계수를 **정상(stationary)** 계수라 한다. $M(\alpha,\beta)$ 는 H 수렴 문서의 계수 조건을 만족하는 행렬의 집합이다. 정상 계수는 어느 만큼 옮긴 $A(\cdot+y,\cdot)$ 와도 분포가 같다.

직관 절의 동전열은 칸 격자의 시작점을 $\lbrack 0,1)$ 에서 균등하게 골라 옮기면 이 틀에 들어가고, 그 작용은 에르고딕이다. $\Omega$ 를 원환면 $\mathbb R^n/\mathbb Z^n$ 으로, $\tau_x$ 를 평행이동으로 두면 $A$ 는 주기 $1$ 의 계수이고 균질화 문서의 경우가 된다.

## 교정자와 균질화 계수

함수 $\varphi:\Omega\to\mathbb R$ 에서 $x\mapsto\varphi(\tau_x\omega)$ 의 기울기를 $x=0$ 에서 잰 장을 $D\varphi$ 라 한다. $L^2_{\mathrm{pot}}$ 은 매끄러운 $\varphi$ 의 $D\varphi$ 들이 이루는 집합의 $L^2(\Omega)^n$ 에서의 닫힘이다. 벡터 $e\in\mathbb R^n$ 마다 **교정자(corrector)** 의 기울기 $\xi_e\in L^2_{\mathrm{pot}}$ 는 모든 $\eta\in L^2_{\mathrm{pot}}$ 에서 다음을 만족하는 원소다.

$$
E\bigl\lbrack A_0(e+\xi_e)\cdot\eta\bigr\rbrack=0
$$

$\xi_e$ 는 [Lax–Milgram 정리](lax-milgram.md)로 하나 있다. **균질화 계수(homogenized coefficient)** $A^\ast$ 는 다음 상수 행렬이다[^1].

$$
A^\ast e=E\bigl\lbrack A_0(e+\xi_e)\bigr\rbrack
$$

$\Omega$ 가 원환면이면 $\xi_e$ 는 셀 문제의 해의 기울기 $\nabla_y\chi_e$ 이고 $A^\ast$ 는 주기 균질화의 계수다. 1차원에서는 $a_0(1+\xi)$ 가 상수 $a^\ast$ 이고 $E\lbrack\xi\rbrack=0$ 이므로 $a^\ast=(E\lbrack 1/a_0\rbrack)^{-1}$ 이 되어 직관 절의 $8/5$ 가 나온다.

# 성질

## 확률적 균질화 정리

정리(Kozlov, Papanicolaou–Varadhan). 계수가 정상이고 에르고딕이면 거의 모든 $\omega$ 에서 $A(x/\varepsilon,\omega)$ 는 $\varepsilon\to 0$ 일 때 상수 행렬 $A^\ast$ 로 H 수렴한다[^2][^3].

증명의 요지. $x\mapsto\xi_e(\tau_x\omega)$ 는 어떤 함수 $\chi_e(x,\omega)$ 의 기울기다. 에르고딕 정리와 $E\lbrack\xi_e\rbrack=0$ 에서 $\varepsilon\chi_e(x/\varepsilon,\omega)$ 는 거의 확실하게 국소 $L^2$ 에서 $0$ 으로 간다. 그러면 $x\cdot e+\varepsilon\chi_e(x/\varepsilon)$ 이 주기 경우의 진동 시험 함수 노릇을 하고, 흐름 $A(e+\xi_e)$ 의 극한도 에르고딕 정리로 $A^\ast e$ 다. 나머지는 [div–curl 보조정리](div-curl-lemma.md)로 하는 균질화 정리의 증명과 같다.

## 변분 꼴과 경계

대칭인 $A_0$ 에서 균질화 계수는 다음 최소화로 정해진다.

$$
A^\ast e\cdot e=\min_{\eta\in L^2_{\mathrm{pot}}}E\bigl\lbrack A_0(e+\eta)\cdot(e+\eta)\bigr\rbrack
$$

$\eta=0$ 을 넣으면 $A^\ast\le E\lbrack A_0\rbrack$ 이고, 발산이 $0$ 인 장에 대한 쌍대 최소화에서 $A^\ast\ge(E\lbrack A_0^{-1}\rbrack)^{-1}$ 이다[^1]. 1차원에서는 아래쪽이 등호다.

## 평면의 대칭 무작위 재료

평면에서 칸마다 동전을 던져 전도율 $1$ 이나 $4$ 를 채운 무작위 바둑판을 본다. $90°$ 회전에 대한 대칭으로 $A^\ast$ 는 단위행렬의 상수배 $a^\ast I$ 다. 두 재료를 맞바꾸어도 분포가 같으므로 [Hashin–Shtrikman 경계](hashin-shtrikman-bounds.md) 문서의 Keller–Dykhne 쌍대성이 적용되어 $a^\ast=\sqrt{1\cdot 4}=2$ 다.

## 교정자의 크기

$\xi_e$ 는 정상이지만 $\chi_e$ 자신은 일반적으로 정상이 아니고, 원점에서 멀어질수록 자랄 수 있다. 에르고딕 정리는 $\chi_e$ 가 거리보다 느리게 자란다는 것만 주므로 균질화의 오차가 얼마나 빨리 $0$ 으로 가는지는 알려 주지 않는다. 칸들이 독립이거나 상관이 빨리 줄어들면 오차의 거듭제곱 속도가 정량 이론으로 증명된다[^4].

# 활용

- 무작위 복합 재료와 다공성 암석. 미세 구조를 통계로만 아는 재료의 유효 전도율과 유효 투과율을 $A^\ast$ 로 정한다. 수치로는 큰 상자 하나에서 셀 문제를 풀어 근사하고, 그 상자를 대표 체적 요소(representative volume element, RVE)라 한다. RVE 근사의 오차가 상자 크기에 따라 줄어드는 속도는 교정자의 크기에 달려 있다.
- 무작위 환경의 무작위 걷기. 간선마다 무작위 전도도를 준 격자 위의 [무작위 걷기](random-walks.md)는 긴 시간 척도에서 공분산 $2A^\ast$ 인 [Brown 운동](brownian-motion.md)처럼 움직인다. Kipnis–Varadhan 정리(Kipnis–Varadhan theorem)가 환경에 대해 평균한 꼴을 주고, 교정자로 걷기를 마팅게일과 작은 오차로 나누는 것이 증명의 요지다.
- [침투](percolation.md) 군집 위의 확산. 초임계 침투의 무한 군집 위에서 걷기를 균질화하면 유효 확산 계수가 나온다. 전도도가 $0$ 인 간선이 있어 계수 조건이 깨지므로 군집의 기하로 그 자리를 메운다.

[^1]: V. V. Jikov, S. M. Kozlov, O. A. Oleinik, *Homogenization of Differential Operators and Integral Functionals*, Springer (1994), Chapter 7.

[^2]: S. M. Kozlov, "The averaging of random operators", *Mathematics of the USSR-Sbornik* **37** (1980), 167–180.

[^3]: G. C. Papanicolaou, S. R. S. Varadhan, "Boundary value problems with rapidly oscillating random coefficients", in *Random Fields*, Colloquia Mathematica Societatis János Bolyai **27**, North-Holland (1981), 835–873.

[^4]: S. Armstrong, T. Kuusi, J.-C. Mourrat, *Quantitative Stochastic Homogenization and Large-Scale Regularity*, Springer (2019).

# 연관 문서

## 선수지식

- [H 수렴](h-convergence.md)
- [에르고딕 정리](ergodic-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #probability #analysis
