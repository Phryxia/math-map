# Kitaev 사슬

# 개요

**Kitaev 사슬(Kitaev chain)** 은 한 줄로 놓인 페르미온 모드가 이웃끼리 이동하고 이웃끼리 쌍으로 생기거나 사라지는 모형이다. 모드 둘짜리 사슬의 해밀토니언을 [Jordan–Wigner 변환](jordan-wigner-transformation.md)으로 큐비트에 옮기면 $-X\_1X\_2$ 가 되고, 가장 작은 고윳값 $-1$ 에 고유벡터가 $\vert ++\rangle$ 과 $\vert --\rangle$ 두 개다. Kitaev 사슬은 이 겹침을 사슬 양 끝에 하나씩 떨어져 있는 Majorana 연산자로 설명하고, 양 끝이 멀면 국소적인 섭동이 이 겹침을 거의 풀지 못한다는 것을 보인다.

# 직관

모드 둘의 해밀토니언을 다음과 같이 둔다. 첫 괄호는 모드 사이의 이동, 둘째 괄호는 두 모드가 함께 비거나 함께 차는 쌍의 생성과 소멸이다.

$$
H=-\big(a_1^\dagger a_2+a_2^\dagger a_1\big)+\big(a_1a_2+a_2^\dagger a_1^\dagger\big)
$$

Jordan–Wigner 변환 $a\_1=\sigma^-\_1$, $a\_2=Z\_1\sigma^-\_2$ 를 넣고 $4\times 4$ 행렬을 계산하면 $H=-X\_1X\_2$ 다. $X\_1X\_2$ 는 $\vert ++\rangle$, $\vert --\rangle$ 에서 $+1$, $\vert +-\rangle$, $\vert -+\rangle$ 에서 $-1$ 이므로, $H$ 의 가장 작은 고윳값 $-1$ 의 고유공간이 2 차원이다.

Majorana 연산자 $c\_1=X\_1$, $c\_2=Y\_1$, $c\_3=Z\_1X\_2$, $c\_4=Z\_1Y\_2$ 로 쓰면 $c\_2c\_3=Y\_1Z\_1X\_2=iX\_1X\_2$ 이므로 $H=ic\_2c\_3$ 이다. $H$ 에 $c\_1$ 과 $c\_4$ 가 나오지 않고, 두 연산자는 $H$ 와 교환한다. $c\_4$ 는 $\vert ++\rangle$ 과 $\vert --\rangle$ 을 서로 바꾸므로 같은 에너지의 바닥 상태가 둘이 된다. 모드가 $N$ 개이면 $c\_1$ 은 왼쪽 끝 큐비트, $c\_{2N}$ 은 오른쪽 끝 큐비트까지의 연산자이고, 바닥 상태의 겹침은 사슬의 두 끝에 있는 연산자에서 나온다.

# 정의

## 해밀토니언

모드 $N$ 개와 실수 $t$, $\Delta$, $\mu$ 에 대해 다음 해밀토니언을 **Kitaev 사슬** 이라 한다[^1].

$$
H=\sum_{j=1}^{N-1}\Big(-t\big(a_j^\dagger a_{j+1}+a_{j+1}^\dagger a_j\big)+\Delta\big(a_ja_{j+1}+a_{j+1}^\dagger a_j^\dagger\big)\Big)-\mu\sum_{j=1}^{N}\Big(n_j-\frac12\Big)
$$

$t$ 를 이동 진폭(hopping amplitude), $\Delta$ 를 쌍 진폭(pairing amplitude), $\mu$ 를 화학 퍼텐셜(chemical potential)이라 한다. 직관 절은 $N=2$, $t=\Delta=1$, $\mu=0$ 이다.

## Majorana 영 모드

$H$ 와 교환하고 제곱이 $I$ 인 에르미트 연산자로서 Majorana 연산자의 일차결합인 것을 **Majorana 영 모드(Majorana zero mode)** 라 한다. 직관 절의 $c\_1$, $c\_4$ 가 Majorana 영 모드다.

# 성질

## 특수점의 풀이

$\mu=0$, $t=\Delta\gt 0$ 이면 Jordan–Wigner 변환으로 다음이 나온다.

$$
H=it\sum_{j=1}^{N-1}c_{2j}c_{2j+1}=-t\sum_{j=1}^{N-1}X_jX_{j+1}
$$

각 $ic\_{2j}c\_{2j+1}$ 은 고윳값 $\pm 1$ 이고 서로 교환하므로 들뜬 에너지는 모두 $2t$ 다. $c\_1$ 과 $c\_{2N}$ 은 $H$ 에 나오지 않는 Majorana 영 모드이고, $f=\tfrac12(c\_1+ic\_{2N})$ 은 에너지 $0$ 의 페르미온 모드다. 바닥 상태는 $\vert +\cdots +\rangle$, $\vert -\cdots -\rangle$ 이 펼치는 2 차원 공간이다.

## 띠 에너지와 상

주기 경계 조건에서 [이산 Fourier 변환](fourier.md)을 하면 파수 $k$ 의 들뜬 에너지가 다음과 같다.

$$
E_k=\sqrt{(2t\cos k+\mu)^2+4\Delta^2\sin^2k}
$$

$\Delta\ne 0$ 이면 $E\_k$ 가 $0$ 이 되는 것은 $\vert\mu\vert=2\vert t\vert$ 일 때뿐이다. $\vert\mu\vert\lt 2\vert t\vert$ 인 영역을 위상 상(topological phase), $\vert\mu\vert\gt 2\vert t\vert$ 인 영역을 자명한 상(trivial phase)이라 한다. $t=\Delta$ 이면 $E\_k$ 는 Jordan–Wigner 변환 문서의 횡자기장 Ising 사슬의 에너지와 같고, $\vert\mu\vert=2t$ 가 그 사슬의 $g=1$ 이다.

## 끝 모드의 지수적 분리

정리. 위상 상에서 열린 사슬은 양 끝에 지수적으로 국소화된 Majorana 연산자 $\gamma\_L$, $\gamma\_R$ 을 가지며, 두 바닥 상태 에너지의 차는 $e^{-N/\xi}$ 에 비례한다. 여기서 $\xi$ 는 $t$, $\Delta$, $\mu$ 로 정해지는 상관 길이다[^1].

$\gamma\_L$ 과 $\gamma\_R$ 을 섞는 항은 두 끝을 모두 건드려야 하므로, 국소적인 섭동은 차수 $N$ 의 섭동 전개에서야 겹침을 푼다. 바닥 상태 공간은 페르미온 수의 홀짝 $P=\prod\_jZ\_j$ 의 고윳값이 $+1$, $-1$ 인 두 상태로 나뉘고, 홀짝을 보존하는 섭동은 둘을 섞지 않는다.

# 활용

- 위상 양자 계산. 두 바닥 상태를 큐비트로 쓰고 Majorana 영 모드를 서로 돌려 바꾸는 꼰 연산으로 게이트를 만든다. 이 연산은 [애니온](anyons.md)의 꼼으로 기술되고, 만들 수 있는 게이트는 Clifford 게이트뿐이다.
- 반도체 나노선. 스핀–궤도 결합이 강한 나노선을 초전도체에 붙이고 자기장을 걸면 저에너지에서 Kitaev 사슬의 위상 상과 같은 모형이 된다는 제안이 있다[^2].
- 횡자기장 Ising 사슬. $t=\Delta$ 에서 Jordan–Wigner 변환으로 같은 모형이므로, Ising 사슬의 강자성 상의 두 바닥 상태가 Majorana 영 모드의 겹침과 대응한다.

[^1]: A. Yu. Kitaev, Unpaired Majorana fermions in quantum wires, *Physics-Uspekhi* 44 (2001), 131–136.
[^2]: R. M. Lutchyn, J. D. Sau, S. Das Sarma, Majorana fermions and a topological phase transition in semiconductor-superconductor heterostructures, *Physical Review Letters* 105 (2010), 077001; Y. Oreg, G. Refael, F. von Oppen, Helical liquids and Majorana bound states in quantum wires, *Physical Review Letters* 105 (2010), 177002.

# 연관 문서

## 선수지식

- [Jordan–Wigner 변환](jordan-wigner-transformation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #algebra #topology
