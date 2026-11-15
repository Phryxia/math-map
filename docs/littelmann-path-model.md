# Littelmann 경로 모형

# 개요

**Littelmann 경로 모형(Littelmann path model)** 은 반단순 [Lie 대수](lie-algebras.md)의 기약표현의 무게를 무게 공간 안의 꺾은선 경로로 세는 방법이다. [Weyl 지표 공식](weyl-character-formula.md)은 무게의 중복도를 교대합의 몫으로 주므로, 무게 하나의 중복도를 알려면 부호가 다른 항들이 지워지는 계산을 끝까지 해야 한다. 경로 모형은 최고무게로 가는 직선 경로 하나에 접고 옮기는 연산을 되풀이해 경로의 집합을 만들고, 그 경로들의 끝점을 세어 지표를 얻는다.

# 직관

$\mathfrak{sl}\_2$ 의 3 차원 표현을 본다. 무게를 수직선 위의 정수로 적으면 단순근이 $2$ 이고, 이 표현의 무게는 $2,0,-2$ 이며 중복도가 모두 $1$ 이다. 이것을 경로로 얻는다.

출발 경로는 $0$ 에서 최고무게 $2$ 까지 곧게 가는 경로 $\pi(t)=2t$ 다. 연산 $f$ 는 경로가 처음으로 $1$ 만큼 올라가는 앞부분을 원점 대칭으로 접고, 나머지를 단순근만큼 아래로 옮긴다. $\pi$ 는 $t=\frac12$ 에서 $1$ 에 닿으므로 앞부분이 $0$ 에서 $-1$ 로 가는 선분이 되고, 뒷부분 $1\to 2$ 가 $-1\to 0$ 이 된다. 새 경로 $f\pi$ 는 $0\to -1\to 0$ 이고 끝점이 $0$ 이다.

$f\pi$ 의 가장 낮은 점은 $t=\frac12$ 의 $-1$ 이고, 거기서 $1$ 만큼 올라가는 부분은 $-1\to 0$ 이다. 그 부분을 $-1$ 을 중심으로 접으면 $-1\to -2$ 가 되어 $f^2\pi$ 는 $0$ 에서 $-2$ 로 곧게 가는 경로다. $f^2\pi$ 는 가장 낮은 점인 끝점에서 더 올라가지 않으므로 $f^3\pi=0$ 이다. 세 경로의 끝점 $2,0,-2$ 가 표현의 무게다.

# 정의

## 경로와 근 연산자

$\mathfrak h^\ast\_{\mathbb R}$ 를 실수 무게 공간이라 하자. **경로(path)** 는 $\pi(0)=0$ 인 조각별 선형 사상 $\pi:\lbrack 0,1\rbrack\to\mathfrak h^\ast\_{\mathbb R}$ 이고, 매개변수를 바꾼 것은 같은 경로로 본다. 경로의 끝점 $\pi(1)$ 을 그 경로의 무게라 한다.

단순근 $\alpha$ 에 대해 $h(t)=\langle\pi(t),\alpha^\vee\rangle$ 와 $m=\min\_{t}h(t)$ 를 둔다. $h(0)=0$ 이므로 $m\le 0$ 이다. **근 연산자(root operator)** $f_\alpha$ 는 다음으로 정의된다.

1. $h(1)-m\lt 1$ 이면 $f_\alpha\pi=0$ 이다.
2. 아니면 $t_0$ 을 $h(t)=m$ 인 가장 큰 $t$, $t_1$ 을 $t_0$ 뒤에서 $h(t)=m+1$ 인 가장 작은 $t$ 로 둔다.
3. $f_\alpha\pi$ 는 $\lbrack 0,t_0\rbrack$ 에서 $\pi$ 와 같고, $\lbrack t_0,t_1\rbrack$ 에서 $\pi(t_0)+s_\alpha(\pi(t)-\pi(t_0))$ 이고, $\lbrack t_1,1\rbrack$ 에서 $\pi(t)-\alpha$ 다.

$s_\alpha$ 는 $\alpha$ 에 대한 반사다. $f_\alpha\pi$ 의 무게는 $\pi(1)-\alpha$ 다. $e_\alpha$ 는 같은 방식으로 정의되고, $f_\alpha\pi=\eta$ 인 것과 $e_\alpha\eta=\pi$ 인 것이 동치다.

직관 절은 $\mathfrak{sl}\_2$ 에서 $\langle x,\alpha^\vee\rangle=x$ 로 놓은 경우다. $\pi(t)=2t$ 에서 $m=0$, $t_0=0$, $t_1=\frac12$ 이다.

## 경로 결정

지배적 정수 무게 $\lambda\in P^+$ 에 대해 $\pi_\lambda(t)=t\lambda$ 로 두고, $\pi_\lambda$ 에 근 연산자 $f_\alpha$ 들을 걸어 얻는 $0$ 이 아닌 경로 전체를 $B(\lambda)$ 라 한다. 이 경로들을 정점으로 두고 $f_\alpha\pi=\eta$ 일 때 색 $\alpha$ 의 화살표를 그은 것을 **경로 결정(path crystal)** 이라 한다. 직관 절의 $B(2\omega_1)$ 은 정점 세 개가 화살표 두 개로 한 줄로 이어진 그래프다.

# 성질

## 지표 공식

$\lambda\in P^+$ 이면 최고무게 $\lambda$ 인 기약표현 $V(\lambda)$ 의 지표가 다음과 같다.[^1]

$$
\mathrm{ch}\thinspace V(\lambda)=\sum_{\pi\in B(\lambda)}e^{\pi(1)}
$$

$\pi_\lambda$ 대신 지배 영역을 벗어나지 않고 $\lambda$ 에서 끝나는 경로 아무것이나 출발점으로 써도 같은 지표가 나온다. 출발 경로가 달라도 경로 결정은 그래프로서 같다.

## 결정 기저와의 일치

경로 결정 $B(\lambda)$ 는 양자군 $U_q(\mathfrak g)$ 의 기약표현 $V(\lambda)$ 의 [결정 기저](crystal-bases.md)가 이루는 결정 그래프와 동형이다. Kashiwara 와 Joseph 가 각각 증명했다. $\mathfrak g=\mathfrak{sl}\_n$ 에서는 경로를 낱말로 적으면 근 연산자가 결정 연산자의 괄호 맞추기 규칙과 같은 연산이 된다.

## 텐서곱의 분해

두 경로 $\pi,\eta$ 의 연결 $\pi\ast\eta$ 는 $\pi$ 를 먼저 따라간 뒤 그 끝점에서 $\eta$ 를 따라가는 경로다. $\lambda,\mu\in P^+$ 이면 다음이 성립한다.

$$
V(\lambda)\otimes V(\mu)\cong\bigoplus_{\eta}V(\lambda+\eta(1))
$$

합은 $\pi_\lambda\ast\eta$ 가 지배 영역을 벗어나지 않는 $\eta\in B(\mu)$ 에 대한 것이다. $\mathfrak{sl}\_n$ 에서는 이것이 [Littlewood–Richardson 규칙](littlewood-richardson.md)이다.[^1]

## Lakshmibai–Seshadri 경로

$B(\lambda)$ 의 원소는 Weyl 군의 원소 열과 유리수 열로 적히는 Lakshmibai–Seshadri 경로(Lakshmibai–Seshadri path)와 같다. 경로가 $\lambda$ 의 Weyl 군 궤도 위의 점들을 향하는 선분을 차례로 이은 것이고, 꺾이는 시각이 유리수로 정해진다. 근 연산자를 걸지 않고 $B(\lambda)$ 를 직접 나열할 때 이 기술을 쓴다.

# 활용

- 무게 중복도의 계산. 지표 공식의 합이 양의 항만으로 되어 있으므로 경로를 세는 것으로 중복도가 나온다. 대각표 모형을 쓰기 어려운 예외형 Lie 대수에도 같은 방법이 적용된다.
- 분지 규칙. 부분 Levi 대수로 제한한 표현의 분해를 지배 영역 대신 그 부분대수의 지배 영역에 머무는 경로를 세어 얻는다.
- [MV 순환](mv-cycles.md)과 [기하학적 Satake 대응](geometric-satake.md). 경로 모형과 MV 순환은 같은 결정을 실현하므로 무게 중복도로 같은 수를 준다.

[^1]: P. Littelmann, Paths and root operators in representation theory, *Ann. of Math.* **142** (1995), 499–525.

# 연관 문서

## 선수지식

- [결정 기저](crystal-bases.md)
- [Weyl 지표 공식](weyl-character-formula.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #algebra #group_theory
