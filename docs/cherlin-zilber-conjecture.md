# Cherlin–Zilber 추측

# 개요

**Cherlin–Zilber 추측(Cherlin–Zilber conjecture)** 은 모형론에서 차원을 잴 수 있는 무한 단순군은 모두 [행렬](matrices.md)군이라는 추측이다. 행렬군 $\mathrm{PSL}\_2(K)$ 는 곱셈 규칙만 주어져도 그 안에서 체 $K$ 를 다시 찾아낼 수 있다. 이 추측은 단순 무한 [유한 Morley 위수 군](groups-of-finite-morley-rank.md)에서 언제나 이렇게 체가 찾아지고, 군이 대수적으로 닫힌 체 위의 단순 [대수군](algebraic-groups.md)이 된다고 주장한다.

# 직관

$\mathrm{PSL}\_2(K)$ 의 군 구조만으로 체 $K$ 가 나온다. 상삼각행렬의 상 $B$ 안에서 대각성분이 $1$ 인 것들과 대각행렬의 상을 각각 $U$ 와 $T$ 로 잡는다.

$$
U=\left\lbrace\begin{pmatrix}1&a\cr 0&1\end{pmatrix}:a\in K\right\rbrace,\qquad T=\left\lbrace\begin{pmatrix}t&0\cr 0&t^{-1}\end{pmatrix}:t\in K^\times\right\rbrace
$$

$U$ 는 $K$ 의 덧셈군과 동형이고, $T$ 의 켤레 작용은 $a\mapsto t^2a$ 다. 이 작용으로 얻는 $U$ 의 자기준동형을 모으면 $K$ 의 곱셈이 전부 나온다. 아벨 부분군 하나와 그에 작용하는 부분군 하나가 체를 준다.

그러면 추상적인 단순 유한 Morley 위수 군 $G$ 에서도 같은 짝을 찾으면 체가 나오고, 그 체 위에서 $G$ 를 행렬군으로 실현할 수 있다. 짝을 찾는 수단은 위수 $2$ 의 원소다. $i^2=1$ 인 $i\ne 1$ 을 잡으면 중심화군(centralizer) $C_G(i)$ 가 진부분군이므로 $G$ 보다 작은 군에서 아벨 부분군을 찾아 올려 쓸 수 있다. 유한군에서 Sylow $2$ 부분군으로 경우를 가르는 논법도 그대로 쓸 수 있다.

위수 $2$ 의 원소가 없으면 그 수단이 없다. Sylow $2$ 부분군의 연결 성분이 자명한 경우가 퇴화형이고, [나쁜 군](bad-groups.md)이 거기 들어간다.

# 정의

## Cherlin–Zilber 추측

Cherlin–Zilber 추측은 단순 무한 유한 Morley 위수 군이 대수적으로 닫힌 체 위의 단순 대수군이라는 진술이다.[^1] 대수성 추측(algebraicity conjecture)이라고도 한다. 대수적으로 닫힌 체 위의 대수군은 모두 유한 Morley 위수 군이므로, 추측은 단순 무한인 경우에 그 역을 주장한다.

단순은 정의 가능한 정규부분군이 아니라 추상적 정규부분군에 대한 조건이다. 자명하지 않은 정규부분군이 아예 없다는 뜻이다. $\mathrm{PSL}\_2(\mathbb C)$ 는 단순 무한 유한 Morley 위수 군이고 대수군이므로 추측의 결론을 만족한다.

## 유형

$G$ 의 [Sylow](sylow-theorems.md) $2$ 부분군을 $S$ 라 하고 $S^\circ$ 를 그 연결 성분(connected component)이라 한다. $S^\circ$ 의 모양으로 네 유형을 가른다.

| 유형 | 조건 |
| --- | --- |
| 짝수형 | $S^\circ$ 가 자명하지 않고 지수가 유계 |
| 홀수형 | $S^\circ$ 가 자명하지 않고 가분 아벨군 |
| 혼합형 | $S^\circ$ 가 위 두 꼴의 성분을 함께 가짐 |
| 퇴화형 | $S^\circ$ 가 자명 |

대수군에서 짝수형은 표수(characteristic) $2$ 에 대응한다. 표수 $2$ 인 $K$ 에서 $\mathrm{PSL}\_2(K)$ 의 Sylow $2$ 부분군은 직관 절의 $U$ 이고, $U$ 의 모든 원소의 제곱이 $1$ 이므로 짝수형이다. 표수가 $2$ 가 아니면 $S^\circ$ 는 직관 절의 $T$ 안에 있는 원소들로 이루어진 가분(divisible) 아벨군이고, $\mathrm{PSL}\_2(K)$ 는 홀수형이다.

# 성질

## 체의 복원

$G=V\rtimes T$ 가 유한 Morley 위수 군이고 $V$ 와 $T$ 가 아벨이며, $T$ 가 $V$ 에 자명한 고정점만 두고 작용하고 $V$ 에 $T$ 로 닫힌 진부분군이 없으면, 유한 Morley 위수 체 $K$ 가 있어 $V$ 는 $K$ 위의 벡터공간이고 $T$ 는 $K^\times$ 의 부분군으로 작용한다(Zilber).[^2]

증명의 요지는 $T$ 의 작용이 생성하는 $V$ 의 정의 가능 자기준동형들의 환을 보는 것이다. $V$ 에 $T$ 로 닫힌 진부분군이 없으므로 이 환의 $0$ 이 아닌 원소는 핵이 자명하고 상이 전체여서 가역이고, 환이 체가 된다. 자기준동형이 모두 정의 가능하므로 체의 Morley 위수가 유한하고, Macintyre 정리로 대수적으로 닫혀 있다.

이 정리가 추측을 다루는 논증의 출구다. 군 안에서 위 모양의 짝 하나를 찾으면 체가 따라오고, 그 체 위의 대수군으로 옮기는 작업이 시작된다.

## 짝수형

짝수형 단순 무한 유한 Morley 위수 군은 표수 $2$ 의 대수적으로 닫힌 체 위의 Chevalley 군이다. 혼합형 단순 무한 유한 Morley 위수 군은 없다(Altınel–Borovik–Cherlin).[^1]

증명은 유한 단순군 분류의 짝수 표수 부분을 모형론으로 옮긴 것이다. 위수 $2$ 원소의 중심화군에서 unipotent 부분군을 뽑아 체를 복원하고, 체 위에서 근계를 세워 Chevalley 군의 표현을 얻는다.

## 작은 위수

위수 $3$ 의 단순 유한 Morley 위수 군은 $\mathrm{PSL}\_2(K)$ 다(Frécon).[^3]

Cherlin 의 위수 $3$ 분류는 가해군, $\mathrm{PSL}\_2(K)$ , 나쁜 군 셋을 남겼고 Frécon 이 위수 $3$ 의 나쁜 군을 배제했다. 추측이 위수 $3$ 에서 성립한다.

위수 $5$ 의 단순 유한 Morley 위수 군은 나쁜 군이다(Deloro–Wiscons).[^4]

위수 $5$ 의 단순 대수군이 없으므로, 추측을 위수 $5$ 에서 확인하는 것과 위수 $5$ 의 나쁜 군을 배제하는 것이 같은 문제다.

## 알려진 열린 문제

추측의 진술은 증명되지 않았다.[^1] 나쁜 군이 있는지도 알려져 있지 않다.[^1]

# 활용

## 분류 작업의 단계

- 추측을 한 위수에서 확인하는 작업은 그 위수의 나쁜 군을 배제하는 단계를 거친다. 위수 $3$ 과 위수 $5$ 의 결과가 그 꼴이다.
- [Zilber 불가분성 정리](zilber-indecomposability.md)는 가해 근기와 Sylow 부분군의 연결 성분을 다루는 단계에서 생성 부분군의 정의 가능성을 확보한다. 중심화군에서 뽑은 부분집합들이 생성하는 군에 위수를 붙이는 자리가 그곳이다.
- [강최소 군](strongly-minimal-groups.md)은 위수 $1$ 의 경우이고 Reineke 정리로 아벨군이므로 단순 무한일 수 없다. 추측의 확인은 위수 $2$ 이상에서 시작한다.

## 모형론의 안정군 이론

[모형론](model-theory.md)에서 안정군의 구조론은 이 추측을 목표로 정리되었다. 연결 성분, 하강 사슬 조건, 정의 가능 체의 복원이라는 세 도구가 추측을 다루려고 만들어졌고, 뒤에 타입으로 정의 가능한 부분군을 쓰는 더 약한 설정으로 옮겨졌다.

[유한 단순군 분류](finite-simple-groups.md)와의 대응이 유형 구분의 근거다. Sylow $2$ 부분군으로 경우를 가르고 중심화군으로 귀납하는 틀이 양쪽에서 같다.

[^1]: T. Altınel, A. Borovik, G. Cherlin, *Simple Groups of Finite Morley Rank*, Math. Surveys Monogr. **145**, AMS(American Mathematical Society) (2008). 추측의 진술, 짝수형과 혼합형의 정리, 나쁜 군의 존재가 미해결이라는 것이 서론에 있다.
[^2]: A. Borovik, A. Nesin, *Groups of Finite Morley Rank*, Oxford Logic Guides **26**, Oxford University Press (1994), 9.1 절(Zilber 의 체 정리).
[^3]: O. Frécon, *Simple groups of Morley rank 3 are algebraic*, J. Amer. Math. Soc. **31** (2018), no. 3.
[^4]: A. Deloro, J. Wiscons, *Simple groups of Morley rank 5 are bad*, J. Symbolic Logic **83** (2018), no. 3, 1217–1228.

# 연관 문서

## 선수지식

- [나쁜 군](bad-groups.md)
- [Zilber 불가분성 정리](zilber-indecomposability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#logic #foundations #algebra #group_theory
