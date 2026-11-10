# 무작위 벤치마킹

# 개요

**무작위 벤치마킹(randomized benchmarking)** 은 양자 게이트가 평균적으로 얼마나 틀리는지를, 무작위로 고른 게이트 열을 길이별로 실행해 성공 확률이 줄어드는 속도로 재는 방법이다. 큐비트 게이트 하나의 오류를 직접 재려면 상태를 준비하고 측정해야 하는데, 준비와 측정에도 오류가 있어 게이트의 오류와 섞인다.

무작위 벤치마킹은 길이 $m$ 에 대한 성공 확률이 $Ap^m+B$ 꼴로 줄어들게 만들어, 준비와 측정의 오류를 $A,B$ 에 몰아넣고 게이트의 오류를 $p$ 하나로 읽는다.

# 직관

큐비트를 $\vert 0\rangle$ 으로 준비하고 게이트 열을 실행한 뒤 다시 $\vert 0\rangle$ 인지 측정한다. 게이트 열이 오류 없이는 항등이 되게 고르면, 측정에서 $\vert 0\rangle$ 이 나올 확률이 오류의 크기를 반영한다.

같은 게이트 $X$ 를 짝수 번 되풀이하면 오류 없이는 항등이다. 그러나 $X$ 가 매번 각 $\varepsilon$ 만큼 더 돌면 $m$ 번 뒤의 확률은 $\cos^2(m\varepsilon/2)$ 이라, 오류가 $m$ 에 대해 지수가 아니라 제곱으로 쌓인다. 반대로 매번 덜 도는 오류와 더 도는 오류가 섞이면 서로 지워진다. 게이트 하나를 되풀이하면 확률이 오류의 종류에 따라 다른 꼴로 변해 오류율 하나로 읽을 수 없다.

그래서 매번 다른 게이트를 Clifford 군에서 무작위로 고르고, 마지막에 그 곱의 역원을 붙여 전체를 항등으로 만든다. 무작위로 고른 게이트들이 오류의 방향을 고르게 흩어, 평균을 내면 어떤 오류든 상태를 일정 확률로 완전히 섞는 오류처럼 작용한다. 그러면 성공 확률이 $m$ 에 대해 지수로 줄어든다.

# 정의

## 탈분극 채널과 평균 충실도

$d$ 차원에서 다음 [양자 채널](quantum-channels.md)을 **탈분극 채널(depolarizing channel)** 이라 하고 $p$ 를 그 탈분극 매개변수라 한다.

$$
\Lambda_p(\rho)=p\rho+(1-p)\frac Id
$$

채널 $\Lambda$ 의 **평균 충실도(average gate fidelity)** 는 순수 상태 $\psi$ 에 대한 $\langle\psi,\Lambda(\psi\psi^\ast)\psi\rangle$ 의 구면 평균이다. $\Lambda\_p$ 의 평균 충실도는 $p+\tfrac{1-p}d$ 이고, $1$ 에서 이를 뺀 $r=\tfrac{(d-1)(1-p)}d$ 를 **평균 오류율(average error rate)** 이라 한다. 큐비트에서 $p=0.99$ 이면 $r=0.005$ 다.

## 유니터리 설계

유한 개의 유니터리 $U\_1,\dots,U\_K$ 가 $U$ 의 성분에 대해 $t$ 차, 켤레 성분에 대해 $t$ 차인 모든 다항식의 평균을 [Haar 측도](haar-measure.md) 평균과 같게 하면 **유니터리 t-설계(unitary t-design)** 라 한다. 유니터리 $2$-설계로 상태 하나를 옮긴 상태들은 [복소 사영 설계](complex-projective-designs.md)의 $2$-설계를 이룬다. [Gottesman–Knill 정리](gottesman-knill.md)의 Clifford 군은 큐비트 $n$ 개에서 유니터리 $2$-설계다[^1].

## 규약

$m$ 마다 다음을 여러 번 되풀이해 성공 확률의 평균 $F(m)$ 을 얻는다[^2].

1. Clifford 군에서 $C\_1,\dots,C\_m$ 을 고르게 독립으로 뽑는다.
2. $C\_{m+1}=(C\_m\cdots C\_1)^{-1}$ 로 둔다.
3. $\vert 0\rangle$ 을 준비하고 $C\_1,\dots,C\_{m+1}$ 을 차례로 실행한 뒤 $\vert 0\rangle$ 인지 측정한다.

# 성질

## 비틀기

정리. $\Lambda$ 가 채널이고 $\lbrace U\_k\rbrace$ 가 유니터리 $2$-설계이면 다음 평균은 탈분극 채널이다[^3].

$$
\Lambda_T(\rho)=\frac1K\sum_{k=1}^KU_k^\ast\Lambda\bigl(U_k\rho U_k^\ast\bigr)U_k
$$

증명의 요지. 이 평균은 $U\_k$ 에 대해 $(2,2)$ 차이므로 Haar 측도 평균과 같다. Haar 평균은 모든 유니터리와 교환하는 채널이고, 행렬 공간이 항등의 배수와 대각합 $0$ 인 행렬의 두 기약 조각으로 나뉘므로 각 조각에서 상수배로 작용한다. 대각합 보존에서 항등 조각의 상수는 $1$ 이고, 대각합 $0$ 조각의 상수가 $p$ 다. 평균 충실도는 비틀기에서 변하지 않는다.

## 지수 감소

정리. 각 게이트 뒤의 오류 채널 $\Lambda$ 가 게이트에 의존하지 않으면, 준비와 측정의 오류를 담은 상수 $A,B$ 가 있어서 다음이 성립한다[^2].

$$
F(m)=Ap^m+B
$$

$p$ 는 $\Lambda$ 를 비튼 탈분극 채널의 매개변수다. 증명은 연속한 두 무작위 게이트 사이의 곱을 새 무작위 게이트로 바꿔 써서 오류 채널마다 비틀기를 적용하는 것이다. 준비와 측정에 오류가 없으면 $C\_{m+1}$ 까지 게이트 $m+1$ 개의 오류가 쌓여 $F(m)=(1-\tfrac1d)p^{m+1}+\tfrac1d$ 이다. 큐비트에서 $p=0.99$, $m=100$ 이면 $F\approx0.68$ 이다.

$A,B$ 는 준비와 측정의 오류만으로 정해지므로, 여러 $m$ 에서 $F(m)$ 을 재어 지수 곡선을 맞추면 $p$ 와 평균 오류율 $r$ 이 준비와 측정의 오류와 따로 나온다.

# 활용

- 게이트 품질의 비교. 서로 다른 장치의 Clifford 게이트 평균 오류율을 같은 절차로 재어 비교한다. [양자 오류정정부호](quantum-error-correction.md)의 문턱과 견주는 오류율이 이 값이다.
- 끼워 넣은 벤치마킹(interleaved randomized benchmarking). 무작위 Clifford 사이마다 재려는 게이트 하나를 끼워 넣고 두 감소율을 비교해 그 게이트의 오류율을 어림한다.

[^1]: C. Dankert, R. Cleve, J. Emerson, E. Livine, "Exact and approximate unitary 2-designs and their application to fidelity estimation", *Physical Review A* 80 (2009), 012304.
[^2]: E. Magesan, J. M. Gambetta, J. Emerson, "Scalable and robust randomized benchmarking of quantum processes", *Physical Review Letters* 106 (2011), 180504.
[^3]: J. Emerson, R. Alicki, K. Życzkowski, "Scalable noise estimation with random unitary operators", *Journal of Optics B* 7 (2005), S347–S352.

# 연관 문서

## 선수지식

- [양자 채널](quantum-channels.md)
- [Gottesman–Knill 정리](gottesman-knill.md)
- [복소 사영 설계](complex-projective-designs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #information_theory #group_theory
