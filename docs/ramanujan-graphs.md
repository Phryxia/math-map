# Ramanujan 그래프의 명시적 구성

# 개요

[Expander 그래프](expander-graphs.md)는 스펙트럼 간극이 클수록 잘 섞인다. Alon–Boppana 정리가 그 한계를 정한다. $d$ 정규 그래프의 두 번째 절댓값 고윳값 $\lambda$ 는 정점 수가 커질 때

$$
\lambda\ \ge\ 2\sqrt{d-1}-o(1)
$$

을 넘을 수 없이 작아진다. 이 하한을 실제로 달성하는 그래프, 곧

$$
\lambda(G)\ \le\ 2\sqrt{d-1}
$$

를 만족하는 $d$ 정규 그래프가 **Ramanujan 그래프**이고, 스펙트럼 간극이 최적인 확장자다.

Lubotzky, Phillips, Sarnak 과 독립적으로 Margulis 가 1988 년에 명시적 구성을 주었다. 그 증명은 Deligne 의 Ramanujan 추측 증명에 의존한다. 그래프의 고윳값 경계가 자기동형 형식 계수의 경계에서 나오고, 그래프의 이름도 거기서 왔다.

# 직관

## 경계 $2\sqrt{d-1}$

$d$ 정규 무한 나무 $T_d$ 의 인접작용소는 스펙트럼 반지름이 $2\sqrt{d-1}$ 이다. 유한 $d$ 정규 그래프는 국소적으로 나무처럼 보이므로 정점 수가 커지면 나무의 스펙트럼을 따라간다. 나무의 스펙트럼 반지름보다 작은 $\lambda$ 가 불가능하다는 것이 Alon–Boppana 의 내용이다.

$$
2\sqrt{d-1}=\text{무한 }d\text{ 정규 나무의 스펙트럼 반지름}
$$

작고 대칭성이 높은 그래프는 대개 Ramanujan 이다. 어려운 것은 정점 수를 무한히 키우면서 조건을 유지하는 무한 족이다. 정점이 많아질수록 $\lambda$ 가 $2\sqrt{d-1}$ 쪽으로 밀려 올라간다.

## 사원수 대수와 Hecke 고윳값

LPS 구성은 그래프를 군의 Cayley 그래프로 만든다. 소수 $p,q$ 를 잡고

$$
G=\mathrm{PGL}\_2(\mathbb F_q)\ \text{또는}\ \mathrm{PSL}\_2(\mathbb F_q),
\qquad
S=\lbrace p+1\ \text{개의 생성원}\rbrace
$$

으로 두고 생성원을 사원수 대수에서 가져온다. $p$ 를 네 제곱수의 합으로 쓰는 방법의 개수가 $8(p+1)$ 이라는 Jacobi 의 정리가 $p+1$ 개의 생성원을 준다.

이 Cayley 그래프의 고윳값은 군의 표현론으로 계산되고 그 값이 사원수 대수 위 자기동형 형식의 Hecke 고윳값이다. Jacquet–Langlands 대응으로 이를 무게 2 첨점형식의 계수로 옮기면 Deligne 의 경계

$$
|a_p|\le 2\sqrt p
$$

가 적용된다. $d=p+1$ 이므로 이 부등식이 그래프 쪽에서 $\lambda\le2\sqrt{d-1}$ 이 된다.

# 정의

## Ramanujan 그래프

연결된 $d$ 정규 그래프 $G$ 의 인접행렬 고윳값을 $d=\mu_1\ge\mu_2\ge\cdots\ge\mu_n$ 이라 하고

$$
\lambda(G)=\max\lbrace|\mu_i|:\ |\mu_i|\ne d\rbrace
$$

라 하자. $\lambda(G)\le2\sqrt{d-1}$ 이면 $G$ 가 **Ramanujan 그래프**다. 이분 그래프에서는 $\mu_n=-d$ 가 자동이므로 제외한다.

## LPS 구성

$p,q$ 를 $4$ 로 나눈 나머지가 1 인 서로 다른 소수라 하자. $p$ 가 $\mathbb F_q$ 에서 제곱잉여인지에 따라 $\mathrm{PSL}\_2(\mathbb F_q)$ 또는 $\mathrm{PGL}\_2(\mathbb F_q)$ 를 택하고, $x_0^2+x_1^2+x_2^2+x_3^2=p$ 의 해에서 만든 $p+1$ 개의 원소를 생성집합으로 하는 Cayley 그래프가 $X^{p,q}$ 다. 이 그래프는 $(p+1)$ 정규이고 Ramanujan 이다.

# 성질

## 차수의 제약

LPS 구성은 $d=p+1$ , 곧 소수에 1 을 더한 차수에서만 작동한다. 이후 확장으로 소수 거듭제곱에 1 을 더한 차수까지 넓어졌다. 임의의 $d$ 는 이 대수적 구성의 사정 밖이다.

## Marcus–Spielman–Srivastava

2015 년에 이분 그래프 쪽에서 이 제약이 해결되었다. 모든 $d\ge3$ 에 대해 $d$ 정규 이분 Ramanujan 그래프의 무한 족이 존재한다.

증명은 주어진 그래프의 2 겹 덮개를 잘 고르면 $\lambda$ 가 늘지 않음을 보인다. 가능한 덮개들에 걸친 특성다항식의 평균인 교대 특성다항식을 잡고, 그 근의 최대값이 개별 다항식 가운데 하나의 근보다 크거나 같음을 쓴다. 이때 도입된 **교대 족(interlacing family)** 개념은 Kadison–Singer 문제 해결에도 쓰였다.

결과는 존재성이고 명시적이지 않다. 다항 시간 구성은 이후 연구에서 부분적으로 얻어졌다.

## 무작위 정규 그래프

Friedman 의 정리는 무작위 $d$ 정규 그래프가 높은 확률로 $\lambda\le2\sqrt{d-1}+\varepsilon$ 을 만족한다고 말한다. $\varepsilon$ 이 붙으므로 무작위로는 최적에 가까운 그래프만 얻고, 얻었는지 확인할 방법도 없다. 명시적 구성이 필요한 자리가 여기다.

# 활용

## 오류정정부호와 통신망

확장성이 좋은 그래프는 지름이 작고 연결이 강하다. 부호 이론의 확장자 부호, 결함에 강한 통신망 설계, 분산 계산의 통신 패턴이 Ramanujan 그래프를 목표로 삼는다. 간극이 최적이면 같은 차수에서 최선의 견고함을 얻는다.

## 무작위성 추출과 복잡도

확장자 그래프 위의 random walk 는 짧은 시간에 균등분포에 가까워지고, 무작위성을 아끼는 알고리즘이 이 성질을 쓴다. 확장자 걷기 보조정리, 결정론적 증폭, $\mathrm{SL}=\mathrm L$ 정리가 확장성의 정량적 경계를 쓰며, 최적 확장자가 그 상수를 최선으로 만든다.

## 암호 해시

초특이 동종사상 그래프도 Ramanujan 이다. 그 그래프의 인접행렬이 Brandt 행렬이고 고윳값이 Hecke 고윳값이므로 Deligne 경계가 적용된다. 여기서는 빠른 섞임이 경로를 찾기 어렵다는 암호적 가정으로 쓰인다.

[^1]: A. Lubotzky, R. Phillips, P. Sarnak, *Ramanujan graphs*, Combinatorica **8** (1988), 261–277. 독립 구성은 G. Margulis (1988). Alon–Boppana 경계는 N. Alon, *Eigenvalues and expanders*, Combinatorica **6** (1986). 교과서는 A. Lubotzky, *Discrete Groups, Expanding Graphs and Invariant Measures* (1994), 그리고 G. Davidoff, P. Sarnak, A. Valette, *Elementary Number Theory, Group Theory and Ramanujan Graphs* (2003). 이분 판본은 A. Marcus, D. Spielman, N. Srivastava, *Interlacing families I*, Ann. of Math. **182** (2015). 무작위 그래프 쪽은 J. Friedman, *A proof of Alon's second eigenvalue conjecture*, Mem. Amer. Math. Soc. (2008).

# 연관 문서

## 선수지식

- [Expander 그래프와 스펙트럼 간극](expander-graphs.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #number_theory #construction
