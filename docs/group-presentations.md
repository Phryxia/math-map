# 군의 표시

# 개요

군의 표시는 생성원의 목록과 그 사이에 성립하는 관계의 목록으로 군을 적는 방법이다. $\langle a,b\mid a^2,b^3,(ab)^3\rangle$ 처럼 쓰고, 이 기호 하나가 군을 동형을 제외하고 결정한다.

[군](groups.md)의 정의는 연산의 공리만 말하고 구체적인 군을 어떻게 적을지는 말하지 않는다. 유한군은 곱셈표로 적을 수 있지만 원소가 $n$ 개면 칸이 $n^2$ 개이고 무한군에는 쓸 수 없다. 표시는 유한한 자료로 무한군까지 적는다.

표시가 주는 것과 주지 않는 것이 뚜렷이 갈린다. 표시에서 군으로 가는 방향은 항상 정의되지만, 반대로 표시만 보고 그 군의 위수, 아벨성, 자명성을 판정하는 일반 절차는 없다.

# 직관

관계를 하나도 걸지 않은 군이 자유군이다. 생성원들을 곱해 만든 낱말 가운데 $aa^{-1}$ 같은 소거만 수행하고 그 밖의 어떤 등식도 강요하지 않는다. 관계를 걸 때마다 자유군의 원소들이 뭉치고, 관계를 충분히 걸면 유한군이 된다.

$\langle a\mid a^n\rangle$ 은 위수 $n$ 의 순환군이고 $\langle a\mid\thinspace\rangle$ 는 무한순환군 $\mathbb Z$ 다. 관계 하나를 더할 때 생기는 것은 몫군이며, 관계자가 생성하는 정규부분군으로 나눈 것이다.

# 정의

## 자유군

집합 $S$ 위의 **자유군** $F(S)$ 는 $S$ 의 원소와 그 역원을 나열한 유한 낱말 가운데 $ss^{-1}$ 과 $s^{-1}s$ 를 지우는 소거를 더 할 수 없는 것들의 집합이고, 연산은 이어붙인 뒤 소거하는 것이다.

$F(S)$ 는 다음 보편성질로도 규정된다. 임의의 군 $G$ 와 임의의 사상 $f\colon S\to G$ 에 대해 $F(S)\to G$ 인 군 준동형이 유일하게 존재해 $S$ 위에서 $f$ 와 일치한다. $S$ 의 크기를 자유군의 **계수**라 하고, 계수가 같은 자유군끼리만 동형이다.

## 표시

$S$ 를 집합, $R\subseteq F(S)$ 를 부분집합이라 하자. $R$ 의 **정규폐포** $\langle\langle R\rangle\rangle$ 은 $R$ 의 원소들의 켤레가 생성하는 $F(S)$ 의 정규부분군이다. 군

$$
\langle S\mid R\rangle=F(S)/\langle\langle R\rangle\rangle
$$

를 생성원 $S$ 와 관계자 $R$ 의 **표시**로 주어진 군이라 한다. $S$ 와 $R$ 이 모두 유한이면 **유한표시**라 한다.

관계자 $r\in R$ 을 등식으로 적는 관행이 있다. $\langle a,b\mid aba^{-1}b^{-1}\rangle$ 과 $\langle a,b\mid ab=ba\rangle$ 는 같은 군 $\mathbb Z^2$ 를 가리킨다.

## 예

| 표시 | 군 |
| --- | --- |
| $\langle a\mid a^n\rangle$ | 위수 $n$ 의 순환군 |
| $\langle a,b\mid a^2,b^2,(ab)^n\rangle$ | 위수 $2n$ 의 이면체군 |
| $\langle a,b\mid ab=ba\rangle$ | $\mathbb Z^2$ |
| $\langle a,b\mid\thinspace\rangle$ | 계수 2 의 자유군 |
| $\langle a,b\mid a^2,b^3,(ab)^7\rangle$ | 무한군, $(2,3,7)$ 삼각군 |
| $\langle x,y\mid x^{-1}yx=y^2\rangle$ | Baumslag–Solitar 군 $BS(1,2)$ |

# 성질

## von Dyck 정리

**정리.** $G=\langle S\mid R\rangle$ 이고 $H$ 가 군이라 하자. 사상 $f\colon S\to H$ 가 모든 $r\in R$ 에서 $f(r)=e$ 를 만족하면 $f$ 는 준동형 $G\to H$ 로 유일하게 확장된다.

증명은 자유군의 보편성질로 $F(S)\to H$ 를 얻은 뒤, 가정에 의해 그 핵이 $R$ 을 포함하고 핵이 정규부분군이므로 $\langle\langle R\rangle\rangle$ 을 포함함을 보는 것이다. 몫의 보편성질이 나머지를 준다.

이 정리가 표시의 쓸모를 결정한다. 어떤 군에서 생성원 후보를 고르고 관계가 성립함을 확인하면, 확인한 것만으로 준동형이 하나 생긴다. 그 준동형이 전사임은 생성원이 $H$ 를 생성하는지로, 단사임은 양쪽의 위수 비교로 본다.

## Tietze 변환

같은 군의 표시는 유일하지 않다. $\langle a\mid a^6\rangle$ 과 $\langle a,b\mid a^2,b^3,ab=ba\rangle$ 은 둘 다 위수 6 의 순환군이다.

두 유한표시가 같은 군을 주는 것과, 한쪽에서 다음 네 변환을 유한 번 적용해 다른 쪽에 도달하는 것이 동치다[^1].

1. 기존 관계자들에서 따라 나오는 관계자를 더한다.
2. 그렇게 더한 관계자를 지운다.
3. 새 생성원 $t$ 와 관계자 $t w^{-1}$ 을 함께 더한다($w$ 는 기존 생성원의 낱말).
4. 그런 꼴의 생성원과 관계자를 함께 지운다.

## 낱말 문제의 결정불가능성

**정리 (Novikov, Boone).** 유한표시 군 $G$ 와 그 표시가 주어졌을 때 입력 낱말 $w$ 가 $G$ 에서 항등원인지 판정하는 알고리즘이 존재하지 않는 $G$ 가 있다[^2].

증명은 Turing 기계의 정지 문제를 낱말 문제로 부호화한다. 기계의 구성을 생성원으로, 한 걸음 전이를 관계자로 옮기면 계산의 이력이 낱말의 변형이 되고, 정지 여부가 특정 낱말의 항등원 여부가 된다.

같은 부호화에서 동형 문제(두 유한표시가 같은 군을 주는가)와 자명성 판정(표시가 자명군을 주는가)도 결정불가능하다. Tietze 변환이 완전한 변환열을 보장하지만 그 길이에 한계가 없으므로 탐색이 끝난다는 보장이 없다.

결정불가능한 것은 모든 유한표시 군을 덮는 단일 알고리즘이다. 개별 군에서는 풀린다. 유한군, 아벨군, 자유군, 쌍곡군에서는 낱말 문제가 결정가능하고, 쌍곡군에서는 선형 시간에 풀린다.

## Nielsen–Schreier 정리

**정리.** 자유군의 부분군은 자유군이다. 계수 $n$ 의 자유군에서 지표 $k$ 의 부분군은 계수 $k(n-1)+1$ 의 자유군이다.

위상적 증명이 짧다. 계수 $n$ 의 자유군은 꽃다발 그래프의 [기본군](fundamental-group.md)이고, 부분군은 덮개공간의 기본군이며, 그래프의 덮개는 다시 그래프다. 그래프의 기본군은 자유군이고, 지표 $k$ 의 덮개는 간선이 $kn$ 개 정점이 $k$ 개이므로 계수가 $kn-k+1$ 이다.

# 활용

- [땋임군](braid-groups.md)의 Artin 표시 $\langle\sigma_1,\dots,\sigma_{n-1}\mid\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1},\thinspace \sigma_i\sigma_j=\sigma_j\sigma_i\thinspace(\vert i-j\vert\ge2)\rangle$ 가 이 군의 정의로 쓰인다. 두 관계자가 각각 가닥의 교차와 멀리 떨어진 교차의 교환을 적는다.
- [기본군](fundamental-group.md)의 계산에서 Seifert–van Kampen 정리는 두 열린집합의 기본군의 표시를 합치고 교집합에서 오는 관계자를 더한다. 곡면군 $\langle a_1,b_1,\dots,a_g,b_g\mid\prod_i\lbrack a_i,b_i\rbrack\rangle$ 이 이렇게 나온다.
- [Coxeter 군](coxeter-groups.md)은 $\langle s_1,\dots,s_n\mid(s_is_j)^{m_{ij}}\rangle$ 꼴의 표시로 정의되며, [근계와 Weyl 군](root-systems.md)의 Weyl 군이 그 예다.
- 계산 군론의 [Todd–Coxeter 알고리즘](todd-coxeter.md)은 표시와 부분군이 주어졌을 때 잉여류를 하나씩 채워 지표를 구한다. 지표가 유한하면 반드시 끝나지만, 무한하면 끝나지 않으며 낱말 문제의 결정불가능성이 그 이유다.

[^1]: H. Tietze, "Über die topologischen Invarianten mehrdimensionaler Mannigfaltigkeiten", *Monatshefte für Mathematik und Physik* 19 (1908). 네 변환과 그 완전성.

[^2]: P. S. Novikov (1955) 와 W. W. Boone (1958). D. J. Robinson, *A Course in the Theory of Groups*, 2nd ed., 12.3 절에 증명이 정리되어 있다.

# 연관 문서

## 선수지식

- [군](groups.md)

## 더 알아보기

- [Coxeter 군](coxeter-groups.md)
- [땋임군](braid-groups.md)
- [Todd–Coxeter 알고리즘](todd-coxeter.md)

#group_theory #algebra #computation #topology
